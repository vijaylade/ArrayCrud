import { Injectable } from '@angular/core';
import { User } from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor() { }

  private users: User[] = []; //In-memory data storage

  private nextId = 1; //Id counter for new users

  //Add a new user
  addUser(user: User): void {
    user.id = this.nextId++;
    this.users.push(user);
  }

  //Get all users
  getUsers(): User[] {
    return this.users
  }

  // Update an existing user
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser; 
    } 
  }

   // Delete a user
   deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

}
