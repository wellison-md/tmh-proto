export const users = [
  {
    id: 1,
    email: 'admin@admin.com',
    pswd: 'secret_admin',
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    isActive: true,
    isVolunteer: false,
    pets: [],
  },
  {
    id: 2,
    email: 'user@user.com',
    pswd: 'secret_user',
    avatar: 'https://randomuser.me/api/portraits/men/39.jpg',
    isActive: true,
    isVolunteer: true,
    pets: [1, 5, 2],
  },
  {
    id: 3,
    email: 'user2@user.com',
    pswd: 'secret_user',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    isActive: false,
    isVolunteer: false,
    pets: [],
  },
]