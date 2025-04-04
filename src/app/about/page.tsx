import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="Fashion House Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Fashion House
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Where Style Meets Innovation in the Heart of Dubai
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2020 in Dubai, UAE, we are a leading fashion retailer committed to bringing the latest trends and high-quality products to our customers across the Middle East.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide our customers with exceptional fashion products and shopping experiences while maintaining the highest standards of quality and service.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted and preferred fashion destination in the Middle East, known for our innovative designs and customer-centric approach.
            </p>
          </div>
        </div>

        {/* CEO's Message */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="CEO"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from Our CEO</h2>
              <p className="text-gray-600 mb-4">
                "At our company, we believe that fashion is more than just clothing - it's a way to express yourself and make a statement. Since our founding in Dubai, we've been committed to bringing the latest trends and highest quality products to our customers across the Middle East."
              </p>
              <p className="text-gray-600">
                "Our success is built on our dedication to customer satisfaction, innovative designs, and sustainable practices. We're proud to be a part of Dubai's vibrant fashion scene and look forward to continuing our journey of growth and excellence."
              </p>
              <p className="mt-4 font-semibold text-gray-900">Ahmed Al-Mansoori</p>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                position: 'Chief Operating Officer',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
              },
              {
                name: 'Mohammed Hassan',
                position: 'Chief Marketing Officer',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
              },
              {
                name: 'Fatima Al-Rashid',
                position: 'Creative Director',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We maintain the highest standards in all our products and services.',
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve to bring you the latest fashion trends.',
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible practices.',
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our top priority.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-indigo-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want to Know More?</h2>
          <p className="text-indigo-100 mb-6">
            Get in touch with us to learn more about our company and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 