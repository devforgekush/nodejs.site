'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Tools() {
  const [activeCategory, setActiveCategory] = useState('antivirus');

  const toolCategories: { [key: string]: {
    title: string;
    description: string;
    tools: {
      name: string;
      type: string;
      description: string;
      features: string[];
      price: string;
      rating: number;
    }[];
  } } = {
    antivirus: {
      title: 'Antivirus & Anti-Malware',
      description: 'Protect your devices from malicious software',
      tools: [
        {
          name: 'Bitdefender Total Security',
          type: 'Premium',
          description: 'Comprehensive security suite with advanced threat detection',
          features: ['Real-time protection', 'Web protection', 'Firewall', 'VPN included'],
          price: '$89.99/year',
          rating: 4.8
        },
        {
          name: 'Malwarebytes Premium',
          type: 'Premium',
          description: 'Specialized anti-malware protection',
          features: ['Anti-malware', 'Real-time protection', 'Web protection', 'Anti-exploit'],
          price: '$39.99/year',
          rating: 4.6
        },
        {
          name: 'Windows Defender',
          type: 'Free',
          description: 'Built-in Windows security solution',
          features: ['Real-time protection', 'Cloud-based protection', 'Firewall', 'SmartScreen'],
          price: 'Free',
          rating: 4.2
        }
      ]
    },
    password: {
      title: 'Password Managers',
      description: 'Secure password storage and generation',
      tools: [
        {
          name: '1Password',
          type: 'Premium',
          description: 'User-friendly password manager with family sharing',
          features: ['Password generation', 'Secure sharing', 'Travel mode', 'Watchtower'],
          price: '$2.99/month',
          rating: 4.7
        },
        {
          name: 'Bitwarden',
          type: 'Freemium',
          description: 'Open-source password manager',
          features: ['Unlimited passwords', 'Cross-platform', 'Password sharing', 'Secure notes'],
          price: 'Free / $10/year',
          rating: 4.6
        }
      ]
    },
    monitoring: {
      title: 'Security Monitoring',
      description: 'Monitor your digital footprint and detect threats',
      tools: [
        {
          name: 'IdentityGuard',
          type: 'Premium',
          description: 'Comprehensive identity theft protection',
          features: ['Identity monitoring', 'Credit monitoring', 'Dark web monitoring', 'Insurance'],
          price: '$19.95/month',
          rating: 4.5
        },
        {
          name: 'Have I Been Pwned',
          type: 'Free',
          description: 'Check if your accounts have been compromised',
          features: ['Breach notifications', 'Password checking', 'Domain monitoring', 'API access'],
          price: 'Free',
          rating: 4.8
        },
        {
          name: 'CreditKarma',
          type: 'Free',
          description: 'Free credit monitoring and identity alerts',
          features: ['Credit scores', 'Credit monitoring', 'Identity monitoring', 'Tax filing'],
          price: 'Free',
          rating: 4.1
        }
      ]
    },
    network: {
      title: 'Network & Forensics',
      description: 'Analyze, scan, and test networks and systems for vulnerabilities and security posture.',
      tools: [
        {
          name: 'Nmap',
          type: 'Free',
          description: 'Network discovery and security auditing tool.',
          features: ['Port scanning', 'Service/version detection', 'OS detection', 'Scriptable interaction'],
          price: 'Free',
          rating: 4.9
        },
        {
          name: 'Wireshark',
          type: 'Free',
          description: 'World’s foremost network protocol analyzer.',
          features: ['Packet capture', 'Deep inspection', 'Live analysis', 'Export data'],
          price: 'Free',
          rating: 4.8
        },
        {
          name: 'Metasploit',
          type: 'Freemium',
          description: 'Penetration testing framework for finding, exploiting, and validating vulnerabilities.',
          features: ['Exploit modules', 'Payloads', 'Post-exploitation', 'Community & Pro versions'],
          price: 'Free / $2,000+/year',
          rating: 4.7
        },
        {
          name: 'Burp Suite',
          type: 'Freemium',
          description: 'Web vulnerability scanner and proxy for security testing.',
          features: ['Intercept proxy', 'Scanner', 'Repeater', 'Extensible'],
          price: 'Free / $449/year',
          rating: 4.6
        },
        {
          name: 'John the Ripper',
          type: 'Free',
          description: 'Popular password cracker for security testing.',
          features: ['Password cracking', 'Wordlist support', 'Hash algorithms', 'Community plugins'],
          price: 'Free',
          rating: 4.5
        },
        {
          name: 'Nessus',
          type: 'Premium',
          description: 'Comprehensive vulnerability scanner for networks and systems.',
          features: ['Vulnerability scanning', 'Compliance checks', 'Reporting', 'Continuous updates'],
          price: '$2,990/year',
          rating: 4.7
        }
      ]
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 font-pacifico cursor-pointer">Cyber Sphere</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Home</Link>
                <Link href="/what-is-cybersecurity" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">What Is Cybersecurity</Link>
                <Link href="/threats" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Threats</Link>
                <Link href="/best-practices" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Best Practices</Link>
                <Link href="/tools" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Tools</Link>
                <Link href="/glossary" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium cursor-pointer">Glossary</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cybersecurity Tools & Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the best cybersecurity tools and software to protect your personal data and business assets. From antivirus to VPNs, find everything you need for comprehensive digital security.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/best-practices" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap">
                Best Practices
              </Link>
              <Link href="/assessment" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer whitespace-nowrap">
                Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(toolCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {toolCategories[activeCategory].title}
            </h2>
            <p className="text-lg text-gray-600">
              {toolCategories[activeCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories[activeCategory].tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    tool.type === 'Free' ? 'bg-green-100 text-green-800' :
                    tool.type === 'Freemium' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {tool.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <i className="ri-check-line text-green-600 mr-2 text-xs w-3 h-3 flex items-center justify-center"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{tool.price}</div>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`ri-star-${i < Math.floor(tool.rating) ? 'fill' : 'line'} text-sm w-4 h-4 flex items-center justify-center`}></i>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{tool.rating}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300 cursor-pointer whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Security Tools */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Free Security Tools</h2>
            <p className="text-lg text-gray-600">Get started with these free cybersecurity tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-green-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-600 mb-4">Google Authenticator, Authy, Microsoft Authenticator</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">Explore →</button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-blue-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Browsers</h3>
              <p className="text-sm text-gray-600 mb-4">Firefox, Brave, Tor Browser</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">Explore →</button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-message-2-line text-purple-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Messaging</h3>
              <p className="text-sm text-gray-600 mb-4">Signal, WhatsApp, Telegram</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">Explore →</button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-lock-line text-orange-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">File Encryption</h3>
              <p className="text-sm text-gray-600 mb-4">VeraCrypt, 7-Zip, AxCrypt</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">Explore →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Checklist */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Tool Checklist</h2>
            <p className="text-lg text-gray-600">Essential tools every user should have</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Users</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Antivirus software installed and updated</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Password manager configured</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Two-factor authentication enabled</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">VPN service for public Wi-Fi</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Automatic backup solution</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Identity monitoring service</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Users</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Enterprise antivirus/EDR solution</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Centralized password management</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Multi-factor authentication system</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Network security monitoring</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Email security gateway</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3 cursor-pointer" />
                  <span className="text-gray-700">Incident response platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tool Selection Guide</h2>
            <p className="text-lg text-gray-600">How to choose the right cybersecurity tools for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-search-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assess Your Needs</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Identify your threat landscape</li>
                <li>• Determine your budget constraints</li>
                <li>• Evaluate current security gaps</li>
                <li>• Consider compliance requirements</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-scales-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compare Options</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Research vendor reputation</li>
                <li>• Read user reviews and ratings</li>
                <li>• Test free trials when available</li>
                <li>• Compare features and pricing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-settings-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Plan deployment strategy</li>
                <li>• Configure security settings</li>
                <li>• Train users on new tools</li>
                <li>• Monitor and optimize performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with our security assessment to identify which tools and practices are most important for your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer whitespace-nowrap">
              Take Assessment
            </Link>
            <Link href="/best-practices" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer whitespace-nowrap">
              Best Practices
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 font-pacifico mb-4">Cyber Sphere</div>
              <p className="text-gray-400">Your trusted resource for cybersecurity knowledge and protection strategies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/what-is-cybersecurity" className="text-gray-400 hover:text-white cursor-pointer">What Is Cybersecurity</Link></li>
                <li><Link href="/threats" className="text-gray-400 hover:text-white cursor-pointer">Common Threats</Link></li>
                <li><Link href="/best-practices" className="text-gray-400 hover:text-white cursor-pointer">Best Practices</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/tools" className="text-gray-400 hover:text-white cursor-pointer">Tools & Resources</Link></li>
                <li><Link href="/glossary" className="text-gray-400 hover:text-white cursor-pointer">Glossary</Link></li>
                <li><Link href="/assessment" className="text-gray-400 hover:text-white cursor-pointer">Security Assessment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sources</h3>
              <ul className="space-y-2">
                <li><a href="https://www.cisa.gov" className="text-gray-400 hover:text-white cursor-pointer">CISA.gov</a></li>
                <li><a href="https://www.nist.gov" className="text-gray-400 hover:text-white cursor-pointer">NIST Framework</a></li>
                <li><a href="https://www.sans.org" className="text-gray-400 hover:text-white cursor-pointer">SANS Institute</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>2025 &copy; Cyber Sphere. Educational content for cybersecurity awareness. kushagra and lucky.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}