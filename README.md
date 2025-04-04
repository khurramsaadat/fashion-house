# Fashion Store E-commerce Website

A modern e-commerce platform built with Next.js 14, React, and TypeScript, featuring a responsive design and seamless shopping experience. View the live site at [Fashion House](https://myfashionhouse.netlify.app/).

## Features

### Product Catalog
- Curated collection of men's and women's fashion
- High-quality product images from Pexels
- Detailed product descriptions and specifications
- Product categorization (Men/Women)
- Product ratings and size options

### Shopping Experience
- Intuitive product browsing
- Category-based navigation
- Detailed product pages with image modals
- Enhanced shopping cart functionality
  - Add/remove items with visual feedback
  - Update quantities
  - Cart total calculation
  - Persistent cart state using localStorage
  - Animated "Add to Cart" button

### User Interface
- Responsive design for all devices
- Modern and clean layout with natural color scheme
- Interactive product cards with hover effects
- Dynamic cart badge
- Smooth transitions and animations
- Image modals for detailed product views

### Navigation & Footer
- Clean and intuitive navigation bar
- Category quick links
- Shopping cart access
- About Us page with company information
- Comprehensive footer with:
  - Company information
  - Social media links
  - Quick navigation links
  - Customer service section
  - Newsletter subscription with styled form
  - Copyright and legal information

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color scheme
- **State Management**: React Context API
- **Icons**: React Icons
- **Package Manager**: npm
- **Deployment**: Netlify

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/khurramsaadat/fashion-house.git
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
│   ├── about/             # About Us page
│   ├── category/          # Category pages
│   ├── product/           # Product pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ImageModal.tsx     # Image modal component
│   ├── Footer.tsx        # Footer component
│   ├── Navbar.tsx        # Navigation component
│   └── ProductDetail.tsx  # Product detail component
├── context/              # Context providers
│   └── CartContext.tsx   # Cart context provider
├── data/                 # Data files
│   └── products.ts       # Product catalog
└── types/               # TypeScript type definitions
    ├── cart.ts         # Cart-related types
    └── product.ts      # Product-related types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is deployed on Netlify. The deployment process includes:

1. Automatic deployments from the `main` branch
2. Optimized build settings for Next.js
3. Environment variable management
4. Custom domain configuration (optional)

To deploy your own version:
1. Fork this repository
2. Sign up on [Netlify](https://www.netlify.com/)
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

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
- Deployed on [Netlify](https://www.netlify.com/)
