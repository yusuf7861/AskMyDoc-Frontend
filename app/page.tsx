import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  FileText,
  Search,
  Zap,
  Sparkles,
  Check,
  Upload,
  MessageSquare,
  BookOpen,
  ArrowDown,
  Play,
  Shield,
  Clock,
  Globe,
  Star,
  Users,
  TrendingUp,
  Brain,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen mesh-gradient noise-overlay relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl animate-blob" />
      <div className="absolute top-60 right-20 h-80 w-80 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-3xl animate-blob animation-delay-400" />
      <div className="absolute bottom-40 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl animate-blob animation-delay-800" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-sm animate-pulse-glow">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent animate-ping" />
            </div>
            <span className="text-xl font-bold tracking-tight">AskMyDoc</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:scale-105 transform"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:scale-105 transform"
            >
              How it Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:scale-105 transform"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:scale-105 transform"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/app">
              <Button variant="ghost" size="sm" className="hover:bg-accent/10">
                Log in
              </Button>
            </Link>
            <Link href="/app">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105 glow-sm"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm border border-accent/30 animated-border">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                <span className="font-medium">Powered by Advanced AI</span>
                <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">New</span>
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-tight">
                Ask questions, get <span className="gradient-text-animated">intelligent answers</span> from your
                documents
              </h1>

              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed max-w-lg">
                Upload any document and instantly search through your knowledge base. AskMyDoc uses AI embeddings to
                find precise answers with citations.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/app">
                  <Button
                    size="lg"
                    className="min-w-[180px] bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105 glow group"
                  >
                    Go to App
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="min-w-[180px] glass hover:bg-accent/10 bg-transparent group"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 stagger-children">
                <div className="flex items-center gap-2 rounded-lg glass px-3 py-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Free to start</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg glass px-3 py-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                    <Shield className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Enterprise security</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg glass px-3 py-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                    <Clock className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Setup in minutes</span>
                </div>
              </div>
            </div>

            {/* Hero Image with floating elements */}
            <div className="relative animate-fade-in-up animation-delay-200">
              {/* Main dashboard image */}
              <div className="relative overflow-hidden rounded-2xl border border-border/50 glass shadow-2xl glow-lg animate-float card-shine">
                <Image
                  src="/modern-ai-document-search-dashboard-interface-with.jpg"
                  alt="AskMyDoc Dashboard Interface"
                  width={800}
                  height={600}
                  className="w-full"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Floating stats card - left */}
              <div className="absolute -bottom-6 -left-6 rounded-xl glass-strong p-4 shadow-lg animate-float-delay glow-sm hover-lift">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Search className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">99%</div>
                    <div className="text-xs text-muted-foreground">Search Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Floating upload card - top right */}
              <div className="absolute -top-4 -right-4 rounded-xl glass-strong p-4 shadow-lg animate-float glow-sm hover-lift">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                    <Upload className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">50+</div>
                    <div className="text-xs text-muted-foreground">File Formats</div>
                  </div>
                </div>
              </div>

              {/* Floating AI card - bottom right */}
              <div className="absolute bottom-20 -right-8 rounded-xl glass-strong p-3 shadow-lg animate-float-reverse glow-sm hover-lift hidden lg:block">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">AI Processing</span>
                  <div className="status-dot" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 stagger-children">
            {[
              { value: "10M+", label: "Documents Processed", icon: FileText },
              { value: "50K+", label: "Active Users", icon: Users },
              { value: "99.9%", label: "Uptime", icon: TrendingUp },
              { value: "150+", label: "Countries", icon: Globe },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="relative group rounded-2xl glass-strong p-6 text-center hover-lift border border-border/50"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-accent" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="border-y border-border/50 glass py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-sm text-muted-foreground">Trusted by teams at leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 stagger-children">
            {["TechCorp", "InnovateLab", "DataFlow", "CloudSync", "AIVentures", "FutureScale"].map((company) => (
              <div
                key={company}
                className="text-xl font-bold tracking-tight text-muted-foreground/40 hover:text-muted-foreground transition-colors hover:scale-105 transform cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 relative">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-3xl animate-pulse-glow animation-delay-600" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="text-center animate-fade-in-up max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm border border-accent/20">
              <Zap className="h-4 w-4 text-accent" />
              <span className="font-medium">Powerful Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Everything you need to <span className="gradient-text">unlock</span> your documents
            </h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              Powerful features designed to help you extract insights from any document instantly.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {[
              {
                icon: Upload,
                title: "Smart Upload",
                description: "Drag and drop any document format. AI automatically processes and indexes your content.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Search,
                title: "Semantic Search",
                description: "Go beyond keywords. Our embedding-based search understands meaning and context.",
                gradient: "from-primary to-accent",
              },
              {
                icon: MessageSquare,
                title: "AI Answers",
                description: "Get comprehensive answers generated by AI with exact citations.",
                gradient: "from-accent to-pink-500",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Your documents are encrypted and stored securely with SOC2 compliance.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Globe,
                title: "Multi-Language",
                description: "Support for 50+ languages with automatic translation capabilities.",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                icon: Cpu,
                title: "Fast Processing",
                description: "Documents are processed in seconds using distributed computing.",
                gradient: "from-rose-500 to-red-500",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl glass-strong p-6 hover-lift border border-border/50 card-shine"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Feature Image Showcase */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Upload className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold">Intelligent Document Processing</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI understands the structure of your documents, extracting text, tables, and images while preserving
                context and relationships.
              </p>
              <ul className="space-y-3">
                {[
                  "PDF, DOCX, TXT support",
                  "Automatic text extraction",
                  "Intelligent chunking",
                  "Real-time processing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border/50 glass hover-card glow-sm">
                <Image
                  src="/file-upload-interface-with-drag-and-drop-zone-show.jpg"
                  alt="Document Upload Feature"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>
          </div>

          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 animate-fade-in-up">
            <div className="order-2 lg:order-1 relative">
              <div className="overflow-hidden rounded-2xl border border-border/50 glass hover-card glow-sm">
                <Image
                  src="/ai-semantic-search-interface-with-search-bar-and-h.jpg"
                  alt="AI Semantic Search"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 h-full w-full rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                <Search className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold">AI-Powered Semantic Search</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our embedding-based search goes beyond simple keyword matching to understand the semantic meaning of
                your queries.
              </p>
              <ul className="space-y-3">
                {[
                  "Context-aware results",
                  "Natural language queries",
                  "Multi-language support",
                  "Relevance ranking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="border-t border-border/50 py-24 md:py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-50" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="text-center animate-fade-in-up max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm border border-accent/20">
              <BookOpen className="h-4 w-4 text-accent" />
              <span className="font-medium">How it Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Three simple steps to <span className="gradient-text">transform</span> your workflow
            </h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">From upload to insight in seconds.</p>
          </div>

          {/* Visual Process Flow */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-border/50 glass-strong p-8 md:p-12 animate-scale-in">
            <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
              {/* Step 1 */}
              <div className="flex flex-1 flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent shadow-xl glow group-hover:scale-110 transition-transform">
                    <Upload className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-accent text-sm font-bold">
                    1
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold">Upload</div>
                <p className="text-muted-foreground max-w-[200px]">Drop your documents in any format</p>
              </div>

              {/* Animated Arrow */}
              <div className="hidden md:flex items-center">
                <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
                <ArrowRight className="h-6 w-6 text-accent -ml-2" />
              </div>
              <div className="md:hidden">
                <ArrowDown className="h-6 w-6 text-accent animate-bounce" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-1 flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-primary shadow-xl glow group-hover:scale-110 transition-transform">
                    <Zap className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-accent text-sm font-bold">
                    2
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold">Process</div>
                <p className="text-muted-foreground max-w-[200px]">AI creates intelligent embeddings</p>
              </div>

              {/* Animated Arrow */}
              <div className="hidden md:flex items-center">
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse" />
                <ArrowRight className="h-6 w-6 text-accent -ml-2" />
              </div>
              <div className="md:hidden">
                <ArrowDown className="h-6 w-6 text-accent animate-bounce" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-1 flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent shadow-xl glow group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-accent text-sm font-bold">
                    3
                  </div>
                </div>
                <div className="mb-2 text-2xl font-bold">Ask</div>
                <p className="text-muted-foreground max-w-[200px]">Get instant answers with citations</p>
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="mt-16 animate-fade-in-up animation-delay-400">
            <h3 className="mb-8 text-center text-xl font-semibold">System Architecture</h3>
            <div className="overflow-hidden rounded-2xl border border-border/50 glass hover-card">
              <Image
                src="/technical-architecture-diagram-showing-document-up.jpg"
                alt="System Architecture Diagram"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center animate-fade-in-up max-w-3xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm border border-accent/20">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Loved by <span className="gradient-text">thousands</span> of teams
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {[
              {
                quote:
                  "AskMyDoc has transformed how our legal team handles document review. We've cut research time by 70%.",
                author: "Sarah Chen",
                role: "General Counsel",
                company: "TechCorp",
                rating: 5,
              },
              {
                quote:
                  "The semantic search is incredible. It understands context in a way that traditional search never could.",
                author: "Michael Rodriguez",
                role: "Research Director",
                company: "InnovateLab",
                rating: 5,
              },
              {
                quote:
                  "Finally, a document AI that actually delivers on its promises. The citations feature is a game-changer.",
                author: "Emily Watson",
                role: "VP of Operations",
                company: "DataFlow",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="group relative rounded-2xl glass-strong p-6 hover-lift border border-border/50"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                    <span className="text-sm font-bold text-primary-foreground">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Ready to transform your <span className="gradient-text">document workflow</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join thousands of teams who are already saving hours every week with intelligent document search.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/app">
                  <Button
                    size="lg"
                    className="min-w-[200px] bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105 glow group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="min-w-[200px] glass hover:bg-accent/10 bg-transparent">
                  Talk to Sales
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border/50 glass shadow-2xl glow-lg hover-card">
                <Image
                  src="/person-using-laptop-with-document-ai-interface-flo.jpg"
                  alt="Person using AskMyDoc"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 glass py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <FileText className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">AskMyDoc</span>
              </div>
              <p className="text-sm text-muted-foreground">AI-powered document search and Q&A for modern teams.</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">&copy; 2025 AskMyDoc. All rights reserved.</p>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-lg bg-muted hover:bg-accent/20 transition-colors flex items-center justify-center cursor-pointer">
                <span className="text-xs">X</span>
              </div>
              <div className="h-8 w-8 rounded-lg bg-muted hover:bg-accent/20 transition-colors flex items-center justify-center cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="h-8 w-8 rounded-lg bg-muted hover:bg-accent/20 transition-colors flex items-center justify-center cursor-pointer">
                <span className="text-xs">GH</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
