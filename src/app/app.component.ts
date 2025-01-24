import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDataService } from './services/user-data.service'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Without-API-CRUD';

  users: User[] = [];

  currentUser: User = { id: 0, name: '', email: '' };

  isEditMode: boolean = false;

  constructor(private userData: UserDataService) {
    this.getUsers();
    console.log('load users')
  }

  //Add user model
  addModel() {
    this.isEditMode = true;
  }

  //Add a new user
  addUser(): void {
    this.userData.addUser({ ...this.currentUser });
    console.log('User Added Successfully', this.userData);
    this.getUsers();
    alert('User Added Successfully');
    this.currentUser = { id: 0, name: '', email: '' };
  }

  //Get all users
  getUsers(): void {
    this.users = this.userData.getUsers();
  }

  //Edit user model
  editUser(user: User): void {
    this.isEditMode = false;
    this.currentUser = { ...user };
  }

  // Update a user
  updateUser(): void {
    this.userData.updateUser(this.currentUser);
    alert('User Updated Successfully');
  }

  // Delete a user
  deleteUser(id: number): void {
    this.userData.deleteUser(id);
    alert('User Deleted Successfully');
    this.getUsers();
  }

}
