// Тип пользователя
export type User = {
    id: string;
    email: string;
    name: string;
    password: string; // добавили поле пароля
  };
  
  // Текущий пользователь
  let currentUser: User | null = null;
  
  // Моковая база пользователей
  const usersDB: User[] = [];
  
  // Регистрация нового пользователя
  export const register = async (
    email: string,
    password: string,
    name: string
  ): Promise<User> => {
    const exists = usersDB.find(u => u.email === email);
    if (exists) {
      throw new Error('Пользователь с таким email уже существует');
    }
  
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      password, // сохраняем пароль (в моковой базе, без шифрования)
    };
  
    usersDB.push(newUser);
    currentUser = newUser;
  
    return newUser;
  };
  
  // Вход пользователя
  export const login = async (
    email: string,
    password: string
  ): Promise<User> => {
    const user = usersDB.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Неверный email или пароль');
    }
  
    currentUser = user;
    return user;
  };
  
  // Выход пользователя
  export const logout = async (): Promise<void> => {
    currentUser = null;
  };
  
  // Получить текущего пользователя
  export const getCurrentUser = (): User | null => {
    return currentUser;
  };
  