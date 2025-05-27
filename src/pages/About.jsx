import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 bg-[#740798] text-white text-center">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">About HRCC - The Royal Chapel</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Rooted in the Word. Aligned with Israel. Centered on the Messiah.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-amber-400 text-white py-2 px-4 text-sm md:text-base">
        <div className="container mx-auto">
          Royal Chapel &gt; <span className="font-semibold">About</span>
        </div>
      </div>

      {/* About Content */}
      <section className="container mx-auto px-4 py-12 space-y-16">
        {/* Intro */}
        <div className="max-w-4xl mx-auto space-y-6 text-[17px] leading-relaxed">
          <p>
            <strong>HRCC, also known as The Royal Chapel</strong>, is an Apostolic congregation of believers that believes the entire Bible, in its original languages, is the true Word of God and remains relevant and applicable today. We believe it is God’s instruction for godly living.
          </p>
          <p>
            We believe we are grafted into the olive tree, which represents Israel, and are part of the commonwealth of Israel through the Messiah Yeshua (Jesus Christ).
          </p>

          <blockquote className="bg-gray-100 border-l-4 border-[#740798] p-4 italic">
            “But if some of the branches were broken off, and you—being a wild olive—were grafted in among them and became a partaker of the root of the olive tree with its richness.”
            <span className="block mt-2 text-sm text-gray-600">— Romans 11:17</span>
          </blockquote>

          <blockquote className="bg-gray-100 border-l-4 border-[#740798] p-4 italic">
            “At that time you were separate from Messiah, excluded from the commonwealth of Israel and strangers to the covenants of promise... members of God’s household.”
            <span className="block mt-2 text-sm text-gray-600">— Ephesians 2:12–13, 19–20</span>
          </blockquote>
        </div>

        {/* Mission, Vision, Core Values, Philosophy, Doctrine */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-[#740798] mb-4">Our Mission</h2>
            <p>Proclaim the Kingdom of God, equipping the saints for ministry and kingdom exploits.</p>
            <p className="text-sm text-gray-600 mt-2 italic">Mark 16:15-18, Colossians 1:13-14, Ephesians 4:11-13, 1 Peter 2:9, Revelation 5:9-10</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#740798] mb-4">Our Vision</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Reach out with hope and love to meet spiritual and physical needs.</li>
              <li>Strengthen families to influence society positively.</li>
              <li>Train leaders with integrity for global impact.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2 italic">Isaiah 61:1-3</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#740798] mb-4">Core Values</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-inside list-disc">
              <li><strong>WIN:</strong> Reaching out to the lost – Mark 16:15</li>
              <li><strong>EQUIP:</strong> Training believers – Ephesians 4:11-12</li>
              <li><strong>SERVICE:</strong> Serving God & others – 1 Peter 4:10</li>
              <li><strong>RELATIONSHIP:</strong> Building godly connections</li>
              <li><strong>EXCELLENCE:</strong> Integrity in all things – 1 Thessalonians 1:2-7</li>
              <li><strong>HOPE:</strong> Preparing for the Messiah’s return</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#740798] mb-4">Our Doctrine</h2>
            <p className="leading-relaxed">We believe in the authority of the Scriptures, the one true God, Messiah (Yeshua), the Holy Spirit, salvation, resurrection, and the coming Kingdom of God. Our doctrine also includes beliefs about man, Satan, angels, the Church, and the end times.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#740798] mb-4">Church Philosophy & Pastoral Duties</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>The church is a spiritual center for life transformation and eternal preparation.</li>
              <li>We empower God’s people to take dominion across all areas of life – Genesis 1:26-28.</li>
              <li>The pastor’s role is to guide, equip, and lead with integrity – Ephesians 4:11-16.</li>
            </ul>
          </section>
        </div>

        {/* Events Section (can be placed on a separate page later) */}
        <section>
          <h2 className="text-3xl font-bold text-[#740798] mb-4">Weekly Events & Special Programs</h2>
          <p className="text-lg font-semibold mt-4">Weekly Services</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Saturday:</strong> Teen Service, REST Service, Tarry Hour</li>
            <li><strong>Sunday:</strong> Community Fellowship</li>
            <li><strong>Monday:</strong> AIRFORCE Prayer</li>
            <li><strong>Tuesday:</strong> Nobles Youth Service (Virtual + Physical)</li>
            <li><strong>Wednesday:</strong> Breakthrough Midweek Service</li>
            <li><strong>Thursday:</strong> Queens Fellowship</li>
            <li><strong>Friday:</strong> Choir Rehearsal, Kingsmen Fellowship, Bible Class</li>
            <li><strong>Ongoing:</strong> Counseling and Sanctuary Keeping</li>
          </ul>

          <p className="text-lg font-semibold mt-8">Special Events</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Healing Night (Monthly)</li>
            <li>Sabbath Delight (First Saturday Monthly)</li>
            <li>Singles’ Hangout (Quarterly)</li>
            <li>Couples’ Paradise (Quarterly)</li>
            <li>Baptism (Monthly)</li>
            <li>General Outreach (Monthly)</li>
            <li>Covenant Service (Quarterly)</li>
            <li>Heritage Month (March)</li>
            <li>Community Day (January after fast)</li>
            <li>Legacy Summit (June)</li>
            <li>Awakening (September)</li>
            <li>Switch – New Year’s Eve Thanksgiving & Awards (December 31)</li>
          </ul>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default About;