package spec03;

import java.util.List;
import java.util.UUID;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class ItemRepository {

	private static ItemRepository itemRepository;
	private EntityManagerFactory factory = Persistence.createEntityManagerFactory("itemUnit");
	private EntityManager entityManager = factory.createEntityManager();

	private ItemRepository() {

	}

	public static ItemRepository getInstance() {
		if (itemRepository == null) {
			itemRepository = new ItemRepository();
		}
		return itemRepository;
	}

	public List<Item> selectAllItems() {
		return entityManager.createQuery("select i from Item i", Item.class).getResultList();
	}

	public void insertItem(Item item) {
		entityManager.getTransaction().begin();
		item.setId(UUID.randomUUID().toString().replace("-", ""));
		entityManager.persist(item);
		entityManager.getTransaction().commit();
	}

	public void updateItem(String id, Item item) {
		try {
			Item toUpdate = entityManager.find(Item.class, id);
			entityManager.getTransaction().begin();
			toUpdate.setValue(item.getValue());
			entityManager.getTransaction().commit();
		} catch (NullPointerException e) {
			entityManager.getTransaction().rollback();
			e.printStackTrace();
		}
	}

	public void deleteItem(String id) {
		try {
			entityManager.getTransaction().begin();
			entityManager.remove(entityManager.find(Item.class, id));
			entityManager.getTransaction().commit();
		} catch (IllegalArgumentException e) {
			entityManager.getTransaction().rollback();
			e.printStackTrace();
		}
	}

}
