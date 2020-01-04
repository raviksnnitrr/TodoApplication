package com.demo.rest.webservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.rest.webservices.bean.Todo;
import com.demo.rest.webservices.service.TodoHardCodedService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ToDoController {

	@Autowired
	private TodoHardCodedService todoHardCodedService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoHardCodedService.findAll();
	}

	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		return todoHardCodedService.findById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, 
			@RequestBody Todo todo) {
	Todo todoUpdated = todoHardCodedService.save(todo);
	return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
	}
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Todo> addTodo(@PathVariable String username, 
			@RequestBody Todo todo) {
	Todo todoCreated = todoHardCodedService.save(todo);
	return new ResponseEntity<Todo>(todoCreated, HttpStatus.OK);
	
	/*Location
	 * Get Resource url
	 * URI uri = ServletUriComponentBuilder.fromCurrentRequest()
	 * 			.path("{id}").buildAndExpand(todoCreated.getId()).uri;
	 * return ResponseEntity.created(uri).build();
	 */
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		Todo todo = todoHardCodedService.deleteById(id);
		if (todo != null)
			return ResponseEntity.noContent().build();
		return ResponseEntity.notFound().build();
	}
}
