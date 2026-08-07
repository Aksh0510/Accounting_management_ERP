export type Page = 'home' | 'about' | 'services' | 'login' | 'knowledge-centre' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'accounting' | 'legal' | 'administrative' | 'property' | 'digital';
  iconName: string;
  shortDesc: string;
  detailedFeatures: string[];
  benefits: string[];
}

export interface AdvisoryMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
  specialization: string;
}

export interface Testimonial {
  id: string;
  societyName: string;
  location: string;
  units: number;
  clientName: string;
  designation: string; // e.g. "Chairman", "Secretary", "Treasurer"
  rating: number;
  comment: string;
  avatar: string;
  yearAssociated: string;
}

export interface UpdateArticle {
  id: string;
  type: 'Circular' | 'News' | 'Blog' | 'Government Order';
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  fullText?: string;
  downloadUrl?: string;
}

export interface KnowledgeDoc {
  id: string;
  title: string;
  category: 'Circulars' | 'Bye-laws' | 'Downloads' | 'GST' | 'TDS' | 'Legal';
  fileType: 'PDF' | 'DOCX' | 'XLSX';
  fileSize: string;
  description: string;
  downloadCount: number;
  dateAdded: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface SocietyAuditRequest {
  societyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  location: string;
  flatCount: number;
  servicesNeeded: string[];
  comments?: string;
}