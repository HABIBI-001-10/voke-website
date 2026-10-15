/**
 * Structured content data — single source of truth.
 * Replace placeholder values with real business details before launch.
 */

export const SITE_CONFIG = {
  name: 'Voke',
  tagline: 'Advertising & Digital Growth',
  description:
    'Voke is a full-service advertising and digital growth company helping ambitious businesses scale and succeed.',
  phone: '+91 89434 42479',
  phoneSecondary: '+91 77361 81483',
  phones: ['+91 89434 42479', '+91 77361 81483'],
  email: 'hello@voke.in',
  address: '[Office Address — Replace]',
  whatsapp: '918943442479',
  whatsappSecondary: '917736181483',
  social: {
    instagram: 'https://instagram.com/voke', // Replace
    linkedin: 'https://linkedin.com/company/voke', // Replace
    twitter: 'https://twitter.com/voke', // Replace
  },
}

export const METRICS = [
  { value: '200+', label: 'Happy Clients' },
  { value: '20+', label: 'Brand Collaborations' },
]

export const SERVICES = [
  {
    id: 'advertising',
    title: 'Advertising',
    tagline: 'Campaigns that move people, and markets.',
    shortDescription:
      'Campaign strategy, creative concepts, media planning, production coordination, and ongoing optimisation.',
    fullDescription:
      'From strategy to screen, we create advertising that earns attention and builds brands. Whether you need a single campaign or a full-year brand-building programme, we handle every stage — from brief to analysis.',
    icon: 'megaphone',
    highlights: [
      'Campaign strategy and brief development',
      'Creative concept and copywriting',
      'Media planning and buying',
      'Production coordination',
      'Post-campaign analysis and optimisation',
    ],
    whoItHelps:
      'Businesses that want to build brand awareness, launch new products, or reach new audiences with memorable, purposeful advertising.',
    howToBegin:
      'Book a consultation. We will listen to your goals, share our initial thinking, and outline a clear path forward.',
  },
  {
    id: 'digital_marketing',
    title: 'Digital Marketing',
    tagline: 'Precision growth across every digital channel.',
    shortDescription:
      'SEO, social media, paid campaigns, content strategy, analytics, and performance reporting.',
    fullDescription:
      'We connect your brand with the audiences that matter most — through search, social, content, and performance channels — and measure everything so every rupee works harder.',
    icon: 'trending-up',
    highlights: [
      'Search engine optimisation (SEO)',
      'Social media management and strategy',
      'Paid search and social advertising',
      'Content strategy and creation',
      'Analytics, reporting, and CRO',
    ],
    whoItHelps:
      'Businesses that want to grow their online presence, generate quality leads, and understand exactly what is working.',
    howToBegin:
      'Start with a consultation. We will review your current digital presence and outline the channels and tactics best suited to your goals.',
  },
  {
    id: 'consultancy',
    title: 'Business Consultancy',
    tagline: 'Clarity for the decisions that matter.',
    shortDescription:
      'Business planning, brand positioning, growth strategy, and process improvement.',
    fullDescription:
      'Whether you are launching, scaling, or repositioning, we help you identify opportunities, sharpen your positioning, and build a practical roadmap for sustainable growth.',
    icon: 'briefcase',
    highlights: [
      'Business planning and market analysis',
      'Brand positioning and messaging',
      'Growth strategy and roadmapping',
      'Process improvement',
      'Competitive landscape review',
    ],
    whoItHelps:
      'Founders, business owners, and leadership teams who want an experienced outside perspective to help them grow with confidence.',
    howToBegin:
      'A free discovery call helps us understand your situation. We then propose a consulting engagement scoped to your specific challenge.',
  },
  {
    id: 'web_dev',
    title: 'Website & Software Development',
    tagline: 'Digital products built to perform.',
    shortDescription:
      'Responsive websites, web applications, custom software, integrations, and ongoing support.',
    fullDescription:
      'We design and build responsive websites, web applications, and custom software that serve your users and your business goals — with reliable ongoing support included.',
    icon: 'code',
    highlights: [
      'Responsive website design and development',
      'Web application development',
      'Custom software and integrations',
      'E-commerce solutions',
      'Maintenance and ongoing support',
    ],
    whoItHelps:
      'Businesses that need a high-quality website, a custom web application, or ongoing development support to power their digital operations.',
    howToBegin:
      'Share your project brief or simply describe what you need. We will scope the work and provide a transparent proposal.',
  },
]

export const PROJECTS = [
  {
    id: 'placeholder-001',
    title: '[Placeholder] Brand Campaign',
    client: '[Client Name — Replace with real client]',
    industry: 'Consumer Goods',
    service: 'advertising',
    serviceLabel: 'Advertising',
    year: '2024',
    coverGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    coverColor: '#1a1a2e',
    challenge:
      '[Replace: Describe the real challenge the client faced. What were they trying to solve or achieve?]',
    insight:
      '[Replace: What was the strategic or creative insight that shaped the approach?]',
    execution:
      '[Replace: Describe what was created, produced, or built. How was the campaign or project executed?]',
    outcome:
      '[Replace: Share verified outcomes the client has approved for publication. Avoid unverified claims.]',
    services: ['Campaign Strategy', 'Creative', 'Media Planning'],
    isPlaceholder: true,
  },
  {
    id: 'placeholder-002',
    title: '[Placeholder] Digital Growth Programme',
    client: '[Client Name — Replace with real client]',
    industry: 'Retail',
    service: 'digital_marketing',
    serviceLabel: 'Digital Marketing',
    year: '2024',
    coverGradient: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
    coverColor: '#1b4332',
    challenge:
      '[Replace: Describe the real challenge the client faced.]',
    insight:
      '[Replace: What was the strategic or creative insight?]',
    execution:
      '[Replace: Describe the digital marketing programme — channels, tactics, content.]',
    outcome:
      '[Replace: Share verified outcomes approved for publication.]',
    services: ['SEO', 'Social Media', 'Paid Campaigns'],
    isPlaceholder: true,
  },
  {
    id: 'placeholder-003',
    title: '[Placeholder] Web Platform Build',
    client: '[Client Name — Replace with real client]',
    industry: 'B2B Services',
    service: 'web_dev',
    serviceLabel: 'Website & Software Dev',
    year: '2024',
    coverGradient: 'linear-gradient(135deg, #3d0c02 0%, #7b2d00 100%)',
    coverColor: '#3d0c02',
    challenge:
      '[Replace: What was the technical or business challenge?]',
    insight:
      '[Replace: What shaped the design and technology approach?]',
    execution:
      '[Replace: Describe what was built and how.]',
    outcome:
      '[Replace: Share verified outcomes.]',
    services: ['Web Design', 'Development', 'Integrations'],
    isPlaceholder: true,
  },
  {
    id: 'placeholder-004',
    title: '[Placeholder] Growth Strategy',
    client: '[Client Name — Replace with real client]',
    industry: 'Technology',
    service: 'consultancy',
    serviceLabel: 'Business Consultancy',
    year: '2024',
    coverGradient: 'linear-gradient(135deg, #0d0d1a 0%, #2a2a4a 100%)',
    coverColor: '#0d0d1a',
    challenge:
      '[Replace: What strategic challenge did the client bring?]',
    insight:
      '[Replace: What insight drove the recommended approach?]',
    execution:
      '[Replace: Describe the consultancy work and outputs.]',
    outcome:
      '[Replace: Share verified outcomes.]',
    services: ['Brand Positioning', 'Growth Strategy'],
    isPlaceholder: true,
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start by listening — understanding your business, your audience, your market, and your goals. No assumptions, no templates.',
  },
  {
    number: '02',
    title: 'Strategise',
    description:
      'We develop a clear, evidence-based strategy that defines what success looks like and how to get there.',
  },
  {
    number: '03',
    title: 'Create',
    description:
      'Our team brings the strategy to life — through design, copy, campaigns, code, or a combination of all four.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We manage a careful, coordinated launch — on time, on brief, and with every detail in place.',
  },
  {
    number: '05',
    title: 'Improve',
    description:
      'We measure, learn, and continuously refine — turning data into better performance over time.',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      '[Placeholder testimonial — Replace with a real client quote, approved for publication. Do not publish this placeholder.]',
    author: '[Client Name — Replace]',
    title: '[Job Title — Replace]',
    company: '[Company — Replace]',
    isPlaceholder: true,
  },
  {
    id: 2,
    quote:
      '[Placeholder testimonial — Replace with a real client quote, approved for publication. Do not publish this placeholder.]',
    author: '[Client Name — Replace]',
    title: '[Job Title — Replace]',
    company: '[Company — Replace]',
    isPlaceholder: true,
  },
  {
    id: 3,
    quote:
      '[Placeholder testimonial — Replace with a real client quote, approved for publication. Do not publish this placeholder.]',
    author: '[Client Name — Replace]',
    title: '[Job Title — Replace]',
    company: '[Company — Replace]',
    isPlaceholder: true,
  },
]

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.title,
}))

export const PROJECT_FILTERS = [
  { value: 'all', label: 'All Work' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'digital_marketing', label: 'Digital Marketing' },
  { value: 'web_dev', label: 'Website & Software' },
  { value: 'consultancy', label: 'Consultancy' },
]
