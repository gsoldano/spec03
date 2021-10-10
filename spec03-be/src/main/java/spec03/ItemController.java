package spec03;

import java.util.List;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/items")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ItemController {
	
	private ItemRepository itemRepository = ItemRepository.getInstance();
	
	@GET
	public List<Item> selectAllItems() {
		return itemRepository.selectAllItems();
	}
	
	@POST
	public void insertItem(Item item) {
		itemRepository.insertItem(item);
	}
	
	@PUT
	@Path("/{id}")
	public void updateItem(@PathParam("id") String id, Item item) {
		itemRepository.updateItem(id,item);
	}
	
	@DELETE
	@Path("/{id}")
	public void deleteItem(@PathParam("id") String id) {
		itemRepository.deleteItem(id);
	}

}
