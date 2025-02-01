const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://wa.me/6285817597752',
        permanent: true,
      },
      {
        source: '/virtualphotography',
        destination: 'https://chat.whatsapp.com/KItFUDJ1Jwo58czZgZYhnN',
        permanent: true,
      },
      {
        source: '/airdrop',
        destination: 'https://whatsapp.com/channel/0029VaNR2B6BadmioY6mar3N',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://wa.me/6285212413931?text=.menu',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/cahya_746?igsh=dTFha2R0YnV1cjhk',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/FruatreBotz',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/31urnjrljaimmmf52sealktmdz3i/',
        permanent: true,
      },
      {
        source: '/madebytragic',
        destination: 'https://discord.gg/6EXgrmtkPX',
        permanent: true,
      }
    ];
  }, 
  trailingSlash: false // Tambahkan opsi trailingSlash di sini
}; 
