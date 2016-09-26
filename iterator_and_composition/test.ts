import { MenuItem } from './menu';
import { Menu } from './menu';
import { MenuComponent } from './menu-component';
import { Waitress } from './waitress';

let menu: MenuComponent = new Menu('Main menu', 'our prices');

let pancakeMenu: MenuComponent = new Menu('Pancake menu', 'pancakes');
pancakeMenu.addItem(new MenuItem('Pancake small', 'good one', 201, false, true));
pancakeMenu.addItem(new MenuItem('Pancake medium', 'good one', 301, false, true));
pancakeMenu.addItem(new MenuItem('Pancake huge', 'good one', 401, false, true));

let dinnerMenu: MenuComponent = new Menu('Dinner menu', 'dinner');
pancakeMenu.addItem(new MenuItem('Dinner small', 'good one', 201, false, false));
pancakeMenu.addItem(new MenuItem('Dinner medium', 'good one', 301, false, false));
pancakeMenu.addItem(new MenuItem('Dinner huge', 'good one', 401, false, false));

let cafeMenu: MenuComponent = new Menu('Cafe menu', 'dinner');
pancakeMenu.addItem(new MenuItem('Cafe small', 'good one', 201, true, false));
pancakeMenu.addItem(new MenuItem('Cafe medium', 'good one', 301, true, false));
pancakeMenu.addItem(new MenuItem('Cafe huge', 'good one', 401, true, false));

menu.addItem(pancakeMenu);
menu.addItem(dinnerMenu);
menu.addItem(cafeMenu);

let waitress: Waitress = new Waitress(menu);
console.log('DRINKS: ');
waitress.printDrinks();

console.log('VEGETARIAN: ');
waitress.printVegeterian();
