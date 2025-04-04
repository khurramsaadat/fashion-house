import Link from 'next/link';

export default function SitemapPage() {
  const sections = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '/products' },
        { name: 'Men', href: '/category/men' },
        { name: 'Women', href: '/category/women' },
        { name: 'Accessories', href: '/category/accessories' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Shipping Information', href: '/shipping' },
        { name: 'Returns & Exchanges', href: '/returns' },
        { name: 'Size Guide', href: '/size-guide' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Sitemap', href: '/sitemap' },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 