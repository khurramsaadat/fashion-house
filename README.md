# Fashion Store E-commerce Website

A modern e-commerce platform built with Next.js 13, React, and TypeScript, featuring a responsive design and seamless shopping experience.

## Features

### Product Catalog
- 40 unique products across men's and women's categories
- High-quality product images from Pexels
- Detailed product descriptions and specifications
- Product categorization (Men/Women)
- Product ratings and size options

### Shopping Experience
- Intuitive product browsing
- Category-based navigation
- Detailed product pages
- Shopping cart functionality
  - Add/remove items
  - Update quantities
  - Cart total calculation
  - Persistent cart state

### User Interface
- Responsive design for all devices
- Modern and clean layout
- Interactive product cards
- Dynamic cart badge
- Smooth transitions and hover effects

### Navigation & Footer
- Clean and intuitive navigation bar
- Category quick links
- Shopping cart access
- Comprehensive footer with:
  - Company information
  - Social media links
  - Quick navigation links
  - Customer service section
  - Newsletter subscription
  - Copyright and legal information

## Tech Stack

- **Frontend Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Icons**: React Icons
- **Package Manager**: npm

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── category/          # Category pages
│   ├── product/           # Product pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── CartProvider.tsx   # Cart context provider
│   ├── Footer.tsx        # Footer component
│   ├── Navbar.tsx        # Navigation component
│   └── ProductDetail.tsx  # Product detail component
├── data/                  # Data files
│   └── products.ts       # Product catalog
└── types/                # TypeScript type definitions
    ├── cart.ts          # Cart-related types
    └── product.ts       # Product-related types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Product images from [Pexels](https://www.pexels.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
