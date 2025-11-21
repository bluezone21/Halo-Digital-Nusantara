import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Filter, ArrowLeft, Save, X, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { useAuth } from '../contexts/AuthContext';

type PageType = 'home' | 'what-we-do' | 'who-we-are' | 'insights' | 'careers' | 'industries' | 'newsroom' | 'investor-relations' | 'contact' | 'privacy' | 'terms' | 'cookies' | 'sitemap' | 'login' | 'register' | 'otp-verification' | 'profile' | 'cms-dashboard';

interface CMSDashboardProps {
  navigateTo: (page: PageType) => void;
}

export interface InsightArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime: string;
  status: 'published' | 'draft';
}

const STORAGE_KEY = 'halo_insights_cms';

// Default insights
const defaultInsights: InsightArticle[] = [
  {
    id: '1',
    title: 'The Future of Digital Transformation in Southeast Asia',
    description: 'Exploring how businesses in Southeast Asia are embracing digital transformation and the opportunities that lie ahead.',
    category: 'Digital Transformation',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    date: '2025-11-15',
    author: 'Digital Strategy Team',
    readTime: '5 min read',
    status: 'published',
  },
  {
    id: '2',
    title: 'AI and Machine Learning: Revolutionizing Business Operations',
    description: 'How artificial intelligence and machine learning are transforming the way businesses operate and make decisions.',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    date: '2025-11-10',
    author: 'AI Research Team',
    readTime: '7 min read',
    status: 'published',
  },
  {
    id: '3',
    title: 'Cloud Migration Strategies for Enterprise Success',
    description: 'Best practices and strategies for successfully migrating enterprise systems to the cloud.',
    category: 'Cloud Computing',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    date: '2025-11-05',
    author: 'Cloud Solutions Team',
    readTime: '6 min read',
    status: 'published',
  },
  {
    id: '4',
    title: 'Cybersecurity in the Modern Digital Landscape',
    description: 'Understanding the evolving cybersecurity threats and how to protect your organization.',
    category: 'Cybersecurity',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    date: '2025-10-28',
    author: 'Security Team',
    readTime: '8 min read',
    status: 'published',
  },
  {
    id: '5',
    title: 'Data Analytics: Turning Information into Insights',
    description: 'Leveraging data analytics to drive business growth and make informed decisions.',
    category: 'Data Analytics',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    date: '2025-10-20',
    author: 'Analytics Team',
    readTime: '5 min read',
    status: 'published',
  },
  {
    id: '6',
    title: 'The Rise of Industry 4.0 in Manufacturing',
    description: 'How Industry 4.0 technologies are revolutionizing manufacturing and production processes.',
    category: 'Industry 4.0',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
    date: '2025-10-12',
    author: 'Industry Solutions Team',
    readTime: '6 min read',
    status: 'published',
  },
];

const categories = [
  'Digital Transformation',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'Data Analytics',
  'Industry 4.0',
  'Blockchain',
  'IoT',
  'Sustainability',
];

export function CMSDashboard({ navigateTo }: CMSDashboardProps) {
  const { user } = useAuth();
  const [insights, setInsights] = useState<InsightArticle[]>([]);
  const [filteredInsights, setFilteredInsights] = useState<InsightArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingInsight, setEditingInsight] = useState<InsightArticle | null>(null);
  const [formData, setFormData] = useState<Omit<InsightArticle, 'id'>>({
    title: '',
    description: '',
    category: '',
    imageUrl: '',
    date: new Date().toISOString().split('T')[0],
    author: user?.fullName || 'Admin',
    readTime: '5 min read',
    status: 'draft',
  });

  // Load insights from localStorage or use defaults
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setInsights(parsed);
      } catch (error) {
        setInsights(defaultInsights);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultInsights));
      }
    } else {
      setInsights(defaultInsights);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultInsights));
    }
  }, []);

  // Save to localStorage whenever insights change
  useEffect(() => {
    if (insights.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(insights));
    }
  }, [insights]);

  // Filter insights
  useEffect(() => {
    let filtered = [...insights];

    if (searchQuery) {
      filtered = filtered.filter(
        (insight) =>
          insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          insight.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          insight.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterCategory !== 'all') {
      filtered = filtered.filter((insight) => insight.category === filterCategory);
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter((insight) => insight.status === filterStatus);
    }

    setFilteredInsights(filtered);
  }, [insights, searchQuery, filterCategory, filterStatus]);

  const handleChange = (field: keyof Omit<InsightArticle, 'id'>, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenDialog = (insight?: InsightArticle) => {
    if (insight) {
      setEditingInsight(insight);
      setFormData({
        title: insight.title,
        description: insight.description,
        category: insight.category,
        imageUrl: insight.imageUrl,
        date: insight.date,
        author: insight.author,
        readTime: insight.readTime,
        status: insight.status,
      });
    } else {
      setEditingInsight(null);
      setFormData({
        title: '',
        description: '',
        category: '',
        imageUrl: '',
        date: new Date().toISOString().split('T')[0],
        author: user?.fullName || 'Admin',
        readTime: '5 min read',
        status: 'draft',
      });
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingInsight(null);
  };

  const handleSave = () => {
    if (!formData.title || !formData.description || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (editingInsight) {
      // Update existing insight
      setInsights((prev) =>
        prev.map((insight) =>
          insight.id === editingInsight.id
            ? { ...formData, id: editingInsight.id }
            : insight
        )
      );
      toast.success('Insight updated successfully!');
    } else {
      // Create new insight
      const newInsight: InsightArticle = {
        ...formData,
        id: Date.now().toString(),
      };
      setInsights((prev) => [newInsight, ...prev]);
      toast.success('Insight created successfully!');
    }

    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this insight?')) {
      setInsights((prev) => prev.filter((insight) => insight.id !== id));
      toast.success('Insight deleted successfully!');
    }
  };

  const handleToggleStatus = (id: string) => {
    setInsights((prev) =>
      prev.map((insight) =>
        insight.id === id
          ? {
              ...insight,
              status: insight.status === 'published' ? 'draft' : 'published',
            }
          : insight
      )
    );
    toast.success('Status updated successfully!');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <Card className="bg-zinc-950 border border-white/10 p-8 text-center">
          <p className="text-white mb-4">Please log in to access the CMS Dashboard</p>
          <Button
            onClick={() => navigateTo('login')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Go to Login
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Button
                onClick={() => navigateTo('home')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                size="sm"
              >
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </div>
            <h1 className="text-4xl text-white mb-2">Insights CMS Dashboard</h1>
            <p className="text-white/60">Manage your insights and articles</p>
          </div>
          <Button
            onClick={() => handleOpenDialog()}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Plus className="mr-2" size={20} />
            Add New Insight
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-zinc-950 border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Total Insights</p>
                <p className="text-3xl text-white">{insights.length}</p>
              </div>
              <div className="bg-purple-600/20 p-3 rounded-lg">
                <ImageIcon className="text-purple-400" size={24} />
              </div>
            </div>
          </Card>
          <Card className="bg-zinc-950 border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Published</p>
                <p className="text-3xl text-white">
                  {insights.filter((i) => i.status === 'published').length}
                </p>
              </div>
              <div className="bg-green-600/20 p-3 rounded-lg">
                <ImageIcon className="text-green-400" size={24} />
              </div>
            </div>
          </Card>
          <Card className="bg-zinc-950 border border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Drafts</p>
                <p className="text-3xl text-white">
                  {insights.filter((i) => i.status === 'draft').length}
                </p>
              </div>
              <div className="bg-yellow-600/20 p-3 rounded-lg">
                <ImageIcon className="text-yellow-400" size={24} />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-zinc-950 border border-white/10 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="space-y-2">
              <Label className="text-white text-sm">Search</Label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                  size={20}
                />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-black border-white/20 text-white"
                  placeholder="Search insights..."
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <Label className="text-white text-sm">Category</Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="bg-black border-white/20 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/20">
                  <SelectItem value="all" className="text-white hover:bg-white/10">
                    All Categories
                  </SelectItem>
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat}
                      value={cat}
                      className="text-white hover:bg-white/10"
                    >
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <Label className="text-white text-sm">Status</Label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="bg-black border-white/20 text-white">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/20">
                  <SelectItem value="all" className="text-white hover:bg-white/10">
                    All Status
                  </SelectItem>
                  <SelectItem value="published" className="text-white hover:bg-white/10">
                    Published
                  </SelectItem>
                  <SelectItem value="draft" className="text-white hover:bg-white/10">
                    Draft
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Table */}
        <Card className="bg-zinc-950 border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/50 border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 text-white text-sm">Title</th>
                  <th className="text-left px-6 py-4 text-white text-sm">Category</th>
                  <th className="text-left px-6 py-4 text-white text-sm">Author</th>
                  <th className="text-left px-6 py-4 text-white text-sm">Date</th>
                  <th className="text-left px-6 py-4 text-white text-sm">Status</th>
                  <th className="text-right px-6 py-4 text-white text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInsights.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <p className="text-white/40">No insights found</p>
                    </td>
                  </tr>
                ) : (
                  filteredInsights.map((insight) => (
                    <tr
                      key={insight.id}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="max-w-md">
                          <p className="text-white mb-1">{insight.title}</p>
                          <p className="text-white/40 text-sm line-clamp-1">
                            {insight.description}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-purple-400 text-sm">{insight.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white/60 text-sm">{insight.author}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white/60 text-sm">
                          {new Date(insight.date).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleStatus(insight.id)}
                          className={`px-3 py-1 rounded-full text-xs transition-colors ${
                            insight.status === 'published'
                              ? 'bg-green-600/20 text-green-400 hover:bg-green-600/30'
                              : 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                          }`}
                        >
                          {insight.status === 'published' ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            onClick={() => handleOpenDialog(insight)}
                            variant="outline"
                            size="sm"
                            className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                          >
                            <Edit size={16} />
                          </Button>
                          <Button
                            onClick={() => handleDelete(insight.id)}
                            variant="outline"
                            size="sm"
                            className="border-red-400/50 text-red-400 hover:bg-red-400/10"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-zinc-950 border border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">
              {editingInsight ? 'Edit Insight' : 'Add New Insight'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-white">
                Title <span className="text-red-400">*</span>
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="bg-black border-white/20 text-white"
                placeholder="Enter insight title"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">
                Description <span className="text-red-400">*</span>
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="bg-black border-white/20 text-white min-h-[100px]"
                placeholder="Enter insight description"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-white">
                Category <span className="text-red-400">*</span>
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                <SelectTrigger className="bg-black border-white/20 text-white">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-950 border-white/20">
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat}
                      value={cat}
                      className="text-white hover:bg-white/10"
                    >
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <Label htmlFor="imageUrl" className="text-white">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => handleChange('imageUrl', e.target.value)}
                className="bg-black border-white/20 text-white"
                placeholder="https://example.com/image.jpg"
              />
              {formData.imageUrl && (
                <div className="mt-2 rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80';
                    }}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Author */}
              <div className="space-y-2">
                <Label htmlFor="author" className="text-white">
                  Author
                </Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleChange('author', e.target.value)}
                  className="bg-black border-white/20 text-white"
                  placeholder="Author name"
                />
              </div>

              {/* Read Time */}
              <div className="space-y-2">
                <Label htmlFor="readTime" className="text-white">
                  Read Time
                </Label>
                <Input
                  id="readTime"
                  value={formData.readTime}
                  onChange={(e) => handleChange('readTime', e.target.value)}
                  className="bg-black border-white/20 text-white"
                  placeholder="5 min read"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-white">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="bg-black border-white/20 text-white"
                />
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label htmlFor="status" className="text-white">
                  Status
                </Label>
                <Select value={formData.status} onValueChange={(value: 'published' | 'draft') => handleChange('status', value)}>
                  <SelectTrigger className="bg-black border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-950 border-white/20">
                    <SelectItem value="draft" className="text-white hover:bg-white/10">
                      Draft
                    </SelectItem>
                    <SelectItem value="published" className="text-white hover:bg-white/10">
                      Published
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={handleCloseDialog}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <X className="mr-2" size={18} />
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Save className="mr-2" size={18} />
              {editingInsight ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
