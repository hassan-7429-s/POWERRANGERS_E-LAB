export default function Home() {
  const galleryAssets = [
    {
      type: "image",
      src: "/gallery1.jpeg",
      title: "One",
    },
    {
     type: "image",
      src: "/gallery2.jpeg",
      title: "Two",
      
    },
    {
      type: "image",
      src: "/gallery3.jpeg",
      title: "Three",
      
    },
    {
     type: "image",
      src: "/gallery4.jpeg",
      title: "Four",
      
    },
    {
      type: "image",
      src: "/gallery5.jpeg",
      title: "Five",
      
    },
    {
      type: "image",
      src: "Du hope Interview.jpeg",
      title: "Six",
      
    },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full bg-white/90 backdrop-blur-md shadow-md z-50 border-b border-gray-100 fixed top-0 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="PowerRanger Logo" className="h-12 w-12 object-contain drop-shadow-lg" />
            <span className="text-2xl font-extrabold text-gray-800 tracking-tight">PowerRanger</span>
          </div>
          <div className="space-x-6">
            <a href="#about" className="nav-link text-gray-700 hover:text-yellow-500">About</a>
            <a href="#problem" className="nav-link text-gray-700 hover:text-yellow-500">Problem & Solution</a>
            <a href="#challenges" className="nav-link text-gray-700 hover:text-yellow-500">E-LAB Challenges</a>
            <a href="#members" className="nav-link text-gray-700 hover:text-yellow-500">Team</a>
            <a href="#projects" className="nav-link text-gray-700 hover:text-yellow-500">Projects</a>
            <a href="#gallery" className="nav-link text-gray-700 hover:text-yellow-500">Gallery</a>
            <a href="#contact" className="nav-link text-gray-700 hover:text-yellow-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-[80vh] pt-24 pb-12 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="https://via.placeholder.com/1200x600?text=Empowering+Women"
          >
            <source src="https://videos.pexels.com/video-files/854192/854192-sd_640_360_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Empowering Vulnerable Women in Rwanda
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white drop-shadow-md">
            We are building an ecommerce platform for Du Hope to help women transitioning out of sex work sell handmade products locally and internationally, while also offering hospitality training and certifications.
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90 drop-shadow-sm">
            By combining digital tools with hands-on skills development, we empower them to achieve economic independence and unlock long-term career opportunities.
          </p>
          <a href="#about" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition">Learn More</a>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{height:'60px'}}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0V46.29c47.29,22,104.09,35.05,158,28,70.22-9.29,136.09-48.13,206-43,61.13,4.62,113.13,44.13,173,57,63.13,13.38,130.13-6.62,193-24,60.13-16.62,117.13-22.62,177-4,31.13,9.38,60.13,24.38,92,32V0Z" opacity=".25" className="fill-white"></path>
            <path d="M0,0V15.81C47.29,36.8,104.09,54.05,158,47c70.22-9.29,136.09-48.13,206-43,61.13,4.62,113.13,44.13,173,57,63.13,13.38,130.13-6.62,193-24,60.13-16.62,117.13-22.62,177-4,31.13,9.38,60.13,24.38,92,32V0Z" opacity=".5" className="fill-white"></path>
            <path d="M0,0V5.63C47.29,27.61,104.09,56.05,158,49c70.22-9.29,136.09-48.13,206-43,61.13,4.62,113.13,44.13,173,57,63.13,13.38,130.13-6.62,193-24,60.13-16.62,117.13-22.62,177-4,31.13,9.38,60.13,24.38,92,32V0Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 animate-slide-up">About PowerRanger E-Lab</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Our Mission</h3>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Our mission is to empower vulnerable women in Rwanda—including sex workers and teen moms seeking alternative livelihoods—by providing training in traditional and modern creative skills such as tailoring, basket weaving, jewelry-making, and design. Through entrepreneurship support and skills development, we aim to help them build sustainable incomes, regain economic independence, and participate confidently in Rwanda’s growing creative economy.
              </p>
            </div>
            <div className="card animate-scale-in">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Core Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Creativity and innovation in training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Inclusivity and diversity in work
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Empowerment and economic independence 
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Sustainability and impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="problem" className="section bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Problem & Solution</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-600">The Problem</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Vulnerable women in Rwanda, particularly sex workers and teen moms, face significant barriers to economic independence. High unemployment rates, limited access to education and skills training, and social stigma prevent them from participating in the formal economy. Traditional livelihoods are unstable, and many lack the creative skills needed for Rwanda’s growing creative economy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Limited access to quality skills training</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Social stigma and discrimination</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Lack of entrepreneurship support</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Unstable traditional income sources</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-600">Our Solution</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are building an ecommerce platform for Du Hope that helps women transitioning out of sex work sell handmade products locally and internationally while also offering hospitality training and certifications. 
              </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">How it works:</h4>
                <p className="text-gray-700 mb-6">
                  The site combines a responsive storefront with hospitality learning modules, certification tracking, and digital tools so the women can serve global customers with confidence while monitoring the credentials they earn through the program.
                </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Top features:</h4>
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Online product catalog</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Secure ordering system</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Mobile-friendly design</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Detailed product descriptions</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Order tracking system</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Who it benefits:</h4>
              <p className="text-gray-700 mb-6">
                This initiative will benefit women in the Du Hope program who are transitioning out of sex work by earning a living through their artwork and crafts, applying the skills they have learned. Customers benefit by purchasing unique, meaningful products and supporting a social cause. This will also benefit the wider community through reduced unemployment and income generation.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Implementation:</h4>
              <p className="text-gray-700 mb-6">
                The project will be implemented by our team, with Du Hope managing the website after launch.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">How this solution reaches users:</h4>
              <p className="text-gray-700 mb-6">
                The best way to reach users is by promoting the website on social media platforms like Instagram, Facebook, and LinkedIn, introducing this to NGOs, and through broadcasting agencies like RTV and TV10 to advertise the website and products.
              </p>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Unique selling point:</h4>
              <p className="text-gray-700">
                The unique value in this solution is that it combines technology and social impact. In this modern time it is hard to do business without technology, and we are trying to connect Du Hope with technology to create long-term income for women in the program. Simultaneously, we teach and train these women to access digital tools; by learning to use simple website platforms like Wix and WordPress, they can create and manage their own online businesses independently. By providing them with basic website development skills through platforms like Wix and WordPress, they can launch their own websites for their business ideas and continue to generate income independently over the long term.
              </p>
            </div>
          </div>
          {/* Prototype Section */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-center mb-8 text-indigo-600">Our Prototype</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Du Hope E-Commerce Experience</h4>
                <p className="text-gray-700 mb-6">
                  We are building an e-commerce platform for Du Hope to help women transitioning out of sex work sell handmade products locally and internationally, while also offering hospitality training and certifications. The prototype blends a responsive online store with vocational learning modules so members can serve global customers with confidence and track the credentials they earn from the program.
                </p>
                <p className="text-gray-700 mb-6">
                  By combining intuitive digital tools, secure payments, and storytelling that highlights each artisan’s journey, the platform empowers them to achieve economic independence and unlock long-term career opportunities beyond the creative economy.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Local & international storefront showcasing handmade fashion, crafts, and hospitality services</li>
                  <li>• Training dashboards for hospitality skills, certifications, and onboarding guidance</li>
                  <li>• Responsive checkout that stitches together mobile money, cards, and regional payment partners</li>
                  <li>• Orders + delivery tracking for local logistics partners and global couriers</li>
                  <li>• Story blocks highlighting certifications earned, hospitality milestones, and community impact</li>
                </ul>
              </div>
              <div className="relative">
                <img src="/group picture.jpeg" alt="Du Hope E-Commerce Platform Prototype" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
                  <p className="text-white p-4 font-semibold">Building careers through commerce + hospitality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-LAB Challenges Section */}
      <section id="challenges" className="section bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">E-LAB Challenges</h2>
          <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            Throughout our E-Lab journey, we identified and addressed six key challenges in implementing our e-commerce solution for Du Hope to empower vulnerable women transitioning out of sex work through digital entrepreneurship.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4 text-blue-800">Challenge 1: Digital Skills Gap</h3>
              <p className="text-gray-700 mb-4">
                Women in Du Hope program lack basic digital literacy and e-commerce skills needed to manage online businesses and product listings.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Solution:</strong> Comprehensive training programs in Wix/WordPress website management, online product design, and digital marketing.</p>
              </div>
            </div>
            {/* Challenge 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Challenge 2: Secure Payment Systems</h3>
              <p className="text-gray-700 mb-4">
                Establishing secure online payment processing for international transactions while ensuring trust and safety for both sellers and buyers.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Solution:</strong> Integration with trusted payment gateways like Stripe and mobile money systems popular in Rwanda.</p>
              </div>
            </div>
            {/* Challenge 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-4 text-purple-800">Challenge 3: Logistics & Delivery</h3>
                <p className="text-gray-700 mb-4">
                  Coordinating reliable delivery services for handmade products to both local and international customers in Rwanda’s developing infrastructure.
                </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Solution:</strong> Partnerships with local delivery agencies and international shipping services with real-time order tracking.</p>
              </div>
            </div>
            {/* Challenge 4 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-800">Challenge 4: Mobile Accessibility</h3>
              <p className="text-gray-700 mb-4">
                Ensuring the e-commerce platform works seamlessly on mobile devices, which are the primary internet access method for many in Rwanda.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Solution:</strong> Responsive design optimization and mobile-first development approach for all features.</p>
              </div>
            </div>
            {/* Challenge 5 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-4 text-pink-800">Challenge 5: Global Market Access</h3>
              <p className="text-gray-700 mb-4">
                Breaking into international markets and competing with established online retailers while highlighting the social impact story.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Solution:</strong> Strategic marketing campaigns emphasizing ethical sourcing and social impact through social media and NGO networks.</p>
              </div>
            </div>
            {/* Challenge 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-4 text-indigo-800">Challenge 6: Sustainable Transition</h3>
              <p className="text-gray-700 mb-4">
                Ensuring women can independently manage and grow their online businesses after initial training and platform handover to Du Hope.
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Solution:</strong> Ongoing mentorship programs, community support networks, and scalable training modules for continuous learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section - Clean Grid with Profiles */}
      <section id="members" className="section bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <img src="/Hassan image.JPG" alt="Hassan Ahmed" className="w-40 h-48 object-cover rounded-lg shadow-md mb-4 border-4 border-gray-100 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Hassan Ahmed</h3>
              <p className="text-base text-gray-700 mb-1">Software Engineer</p>
              <details className="text-center">
                <summary className="text-red-700 font-semibold underline hover:text-red-900 cursor-pointer">View Profile</summary>
                <p className="text-sm text-gray-600 mt-2">I am from Hargiesa, Somaliland. I like to code. One unique thing about me is that I have twin brother and I like water rafting. I hope to bring my tech skills to my team.</p>
              </details>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <img src="/honorata image.jpeg" alt="Inyange Carla" className="w-40 h-48 object-cover rounded-lg shadow-md mb-4 border-4 border-gray-100 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Honorate Umwamikazi</h3>
              <p className="text-base text-gray-700 mb-1">Video Editor</p>
              <details className="text-center">
                <summary className="text-red-700 font-semibold underline hover:text-red-900 cursor-pointer">View Profile</summary>
                <p className="text-sm text-gray-600 mt-2"> I am from Kigali, Rwanda. One fun fact about me is that I like taekwondo. I am a passionate video editor with experience in creating engaging content for various platforms. I love storytelling and bringing ideas to life through visual media. I will bring my skills to help my team.</p>
              </details>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <img src="/carla image.jpeg" alt="Inyange Carla" className="w-40 h-48 object-cover rounded-lg shadow-md mb-4 border-4 border-gray-100 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Inyange Carla</h3>
              <p className="text-base text-gray-700 mb-1"> Team Support </p>
              <details className="text-center">
                <summary className="text-red-700 font-semibold underline hover:text-red-900 cursor-pointer">View Profile</summary>
                <p className="text-sm text-gray-600 mt-2"> I am from Kigali, Rwanda.I am dedicated to providing excellent support to our team members, ensuring smooth collaboration and effective communication.</p>
              </details>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <img src="/Bruno image.jpeg" alt="Hirwa Bruno" className="w-40 h-48 object-cover rounded-lg shadow-md mb-4 border-4 border-gray-100 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Hirwa Bruno</h3>
              <p className="text-base text-gray-700 mb-1">Professional Viber</p>
              <details className="text-center">
                <summary className="text-red-700 font-semibold underline hover:text-red-900 cursor-pointer">View Profile</summary>
                <p className="text-sm text-gray-600 mt-2"> I am from Kigali, Rwanda. One fun fact about me is that I love cars. I am an experienced entrepreneur and coach, dedicated to helping individuals and businesses achieve their goals.</p>
              </details>
            </div>
            {/* Team Member 5 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <img src="/hania image.jpeg" alt="Hanai Gahitsi" className="w-40 h-48 object-cover rounded-lg shadow-md mb-4 border-4 border-gray-100 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Hanai Gahitsi</h3>
              <p className="text-base text-gray-700 mb-1"> Team speaker </p>
              <details className="text-center">
                <summary className="text-red-700 font-semibold underline hover:text-red-900 cursor-pointer">View Profile</summary>
                <p className="text-sm text-gray-600 mt-2">I am from Kigali, Rwanda. One fun fact about me is that I love old movies. I am dedicated to speaking for my team and that is what I bring to my team.</p>
              </details>
            </div>
            {/* Team Member 6 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <img src="/Germain image.jpeg" alt="Germain Iradukunda" className="w-40 h-48 object-cover rounded-lg shadow-md mb-4 border-4 border-gray-100 group-hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Germain Iradukunda</h3>
              <p className="text-base text-gray-700 mb-1">Operations & Strategies</p>
              <details className="text-center">
                <summary className="text-red-700 font-semibold underline hover:text-red-900 cursor-pointer">View Profile</summary>
                <p className="text-sm text-gray-600 mt-2"> I am from Kigali, Rwanda. One fun fact about me is that I can stay awake for more than 40 hours straight. I am responsible for shaping the overall direction and long-term success of the initiatives.I bring my leadership skills to my team and creating smooth success to our collaborations. </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Split Layout Modern */}
      <section id="projects" className="section bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
            Featured Projects
            <span className="block w-20 h-1 bg-red-700 mt-2 mx-auto rounded"></span>
          </h2>
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-10">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Help Lab</h3>
              <span className="block w-12 h-1 bg-yellow-400 mb-4 rounded"></span>
              <a href="https://www.youtube.com/watch?v=s0-DbVFszL0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 transition-all duration-300 hover:shadow-lg">Watch Video</a>
            </div>
            <div className="flex-1">
              <img src="/Help Lab.jpeg" alt="Help Lab Project" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-10">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hunt for Treasure</h3>
              <span className="block w-12 h-1 bg-pink-500 mb-4 rounded"></span>
              <a href="https://www.youtube.com/watch?v=2WGIxHpqiiA&t=7s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:shadow-lg">Watch Video</a>
            </div>
            <div className="flex-1">
              <img src="/Du hope Interview.jpeg" alt="Du Hope Organization" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Discover Africa</h3>
              <span className="block w-15 h-1 bg-indigo-500 mb-4 rounded"></span>
              <p className="text-lg text-gray-700 mb-6">
                Exploring the challenges and opportunities in Africa, with a focus on unemployment among vulnerable women in Rwanda, including sex workers and teen moms, and how creative skills training can create pathways to economic independence.
              </p>
              <a href="https://www.youtube.com/watch?v=ktOYOz1IM6k" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg">Watch Video</a>
            </div>
            <div className="flex-1">
              <img src="/group picture.jpeg" alt="Discover Africa Project" className="w-full h-98 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>


      <section id="gallery" className="section bg-gray-50">
        <div className="container mx-auto max-w-6xl space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">Gallery</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Authentic snapshots of the PowerRanger E-Lab team and the Du Hope solution. These cards showcase the faces behind the e-commerce prototype and leave room for future videos describing hospitality and certification stories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryAssets.map((asset) => (
              <div
                key={asset.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-64 w-full">
                  {asset.type === "image" ? (
                    <img
                      src={asset.src}
                      alt={asset.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={asset.src}
                      poster={asset.poster}
                      controls
                      className="h-full w-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{asset.title}</h3>
                  <span className="mt-3 inline-flex rounded-full border border-yellow-300 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-600">
                    {asset.type === "video" ? "Video" : "Image"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Contact Section - Social Enhanced */}
      <section id="contact" className="section bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Connect & Join Our Mission</h2>
          <p className="text-xl mb-12 opacity-90">
            Reach out to collaborate, share ideas, or join our mission to empower women in Rwanda. Follow us for updates and inspiring stories!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a href="mailto:hassansharif2030@gmail.com" className="inline-flex items-center justify-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">Email Us</a>
            <a href="https://www.instagram.com/pow_rans/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm space-x-2">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
              Instagram
            </a>
            <a href="https://www.youtube.com/@power-rangersgogo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm space-x-2">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.86.56a2.75 2.75 0 0 0-1.94 1.94C2.5 9.66 2.5 12 2.5 12s0 2.34.56 3.999a2.75 2.75 0 0 0 1.94 1.94C5.8 18.5 12 18.5 12 18.5s6.2 0 7.86-.56a2.75 2.75 0 0 0 1.94-1.94C21.5 14.34 21.5 12 21.5 12s0-2.34-.56-3.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
              YouTube
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">&copy; 2026 PowerRanger E-Lab. All rights reserved. | Empowering Women in Rwanda</p>
          </div>
        </div>
      </section>
    </div>
  );
}
