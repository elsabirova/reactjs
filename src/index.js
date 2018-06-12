import User from './user';
import Message from './message';

const user = new User('Иван', 'Иванович');
user.displayInfo();

const message = new Message('.msg', 'Hello, world!');
message.init();
