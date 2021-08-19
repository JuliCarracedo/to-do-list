import Task from './task';

export default class Storage{
    constructor(){
        this.list = JSON.parse(localStorage.getItem('list'));
    }
    getList( ) {
        if (this.list.length > 0){
            return this.list;
        }
        else{
            return [new Task('Do the dishes', false, increaseCounter()), new Task('Wash my mouth', false, increaseCounter()), new Task('Have a Coffee', false, increaseCounter())];
        }
    }
}