export const initialUser = {
  id: 'me_123',
  username: 'antigravity_dev',
  fullName: 'AntiGravity Dev',
  avatar: 'https://i.pravatar.cc/150?img=12',
  bio: 'Frontend Engineer | React Enthusiast 🚀\nBuilding cool things for the web.',
  followers: 1234,
  following: 432,
  posts: 12
};

export const initialPosts = [
  {
    id: 'post_1',
    user: {
      username: 'jane_smith',
      userImage: 'https://i.pravatar.cc/150?img=5',
    },
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=500&fit=crop',
    caption: 'Neon lights and late nights. Loving this view 😍 #tokyo',
    likes: 89,
    comments: [
      { id: 'c1', username: 'mike_dev', text: 'Stunning!' }
    ],
    time: '4 HOURS AGO',
  },
  {
    id: 'post_2',
    user: {
      username: 'john_doe',
      userImage: 'https://i.pravatar.cc/150?img=8',
    },
    location: 'San Francisco, California',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=500&fit=crop',
    caption: 'Beautiful day exploring the city! ✨',
    likes: 124,
    comments: [
      { id: 'c2', username: 'sarah_p', text: 'Classic SF!' },
      { id: 'c3', username: 'antigravity_dev', text: 'Need to visit there soon 😊' }
    ],
    time: '2 HOURS AGO',
  },
  {
    id: 'post_3',
    user: {
      username: 'travel_bug',
      userImage: 'https://i.pravatar.cc/150?img=40',
    },
    location: 'Alps, Switzerland',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&h=500&fit=crop',
    caption: 'Nature at its finest. ⛰️',
    likes: 5410,
    comments: [],
    time: '1 DAY AGO',
  }
];

export const initialStories = [
  { id: 's1', username: 'jane_smith', userImage: 'https://i.pravatar.cc/150?img=5', seen: false, storyImage: 'https://images.unsplash.com/photo-1621682372775-53044a0437a6?w=400&h=700&fit=crop' },
  { id: 's2', username: 'john_doe', userImage: 'https://i.pravatar.cc/150?img=8', seen: false, storyImage: 'https://images.unsplash.com/photo-1520698854070-5db504fe6374?w=400&h=700&fit=crop' },
  { id: 's3', username: 'travel_bug', userImage: 'https://i.pravatar.cc/150?img=40', seen: false, storyImage: 'https://images.unsplash.com/photo-1504150558240-1b279c61de15?w=400&h=700&fit=crop' },
  { id: 's4', username: 'mike_dev', userImage: 'https://i.pravatar.cc/150?img=11', seen: false, storyImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=700&fit=crop' },
  { id: 's5', username: 'sarah_p', userImage: 'https://i.pravatar.cc/150?img=16', seen: true, storyImage: null },
  { id: 's6', username: 'daily_cute', userImage: 'https://i.pravatar.cc/150?img=22', seen: true, storyImage: null },
];
