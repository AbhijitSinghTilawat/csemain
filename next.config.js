/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cse.iiti.ac.in', // <-- IIT इंदौर की वेबसाइट के लिए
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // <-- प्लेसहोल्डर इमेज के लिए
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;