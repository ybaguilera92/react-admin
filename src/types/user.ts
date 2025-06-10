export interface User {
  id: string;
  name: string;
  email: string;
  role: string; // e.g., 'Admin', 'Editor', 'Viewer'
  createdAt: string; // ISO date string
  status: 'active' | 'inactive' | 'suspended';
} 