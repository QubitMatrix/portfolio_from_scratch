import React from "react";

export default function WAFBlog(){
    return(<div id="waf-blog-mid"><h1>Introduction</h1>
        <p><strong>Web Application Firewall (WAF)</strong> is used to protect web applications from various application level attacks like SQL Injection, Cross-Site-Scripting or Cross-Site-Request-Forgery. Unlike traditional security measures that work at the lower layers of the <code>OSI model</code>, a WAF works at the <strong>application layer</strong> by filtering incoming requests and monitoring HTTP/HTTPS traffic between web application and internet.</p>
        <p>A WAF is placed between the web application and the internet, it acts as a <strong>reverse proxy</strong> server which protects the web server from direct exposure. Any traffic has to pass through the WAF and it gets sent to the web server only after filtering. A set of rules known as <code>policies</code> are used to filter the traffic.</p>
        <h2>Importance</h2>
        <p>With the evolution of the internet and increased dependence on web application comes the necessity of a solution that can protect these applications. Web applications are one of the most common attack vectors due to their exposure to the internet and the lack of strong, consistent well-defined protection mechanisms. Unlike other layers, the wide variation in web application architecture makes it harder to secure this layer of the OSI model.</p>
        <p>Web applications are particularly vulnerable to SQL injection, Cross Site Scripting, Cross Site Request Forgery, Denial of Service and Command injection. Most of these attacks exploit flaws within the application logic or configuration. WAF proactively secures the application from such attacks with its policies to filter out malicious traffic from legitimate traffic.</p>
        <h2>WAF vs Firewall</h2>
        <p>Now one might wonder, a WAF filters out legitimate traffic using some policies, isn't that exactly how a firewall works?<br/>
        While a firewall works at the lower levels like <strong>network</strong> and <strong>transport</strong> layers, a WAF works at the <strong>application</strong> layer. This means that the traffic picked up by the firewall is very different compared to a WAF. A firewall typically manages the traffic based on IP addresses, ports and protocols and has corresponding rules and policies, it is not concerned with application level data. WAF focuses on HTTP/HTTPS traffic and specializes in capturing application level data such as headers, URLs and cookies and mitigating web-specific threats arising through malicious payload.</p>
        <p>In general, firewalls strive to secure the network perimeter and block unauthorized access, while WAF provides a much more granular security at web application logic level to block malicious requests to the web server.</p>
        <table>
        <thead>
        <tr>
        <th>Aspect</th>
        <th>WAF</th>
        <th>Firewall</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>OSI Layer</td>
        <td>Layer 7 (Application)</td>
        <td>Layer 3 and 4 (Network and Transport)</td>
        </tr>
        <tr>
        <td>Focus</td>
        <td>HTTP/HTTPS requests and responses</td>
        <td>IP address, ports and protocols</td>
        </tr>
        <tr>
        <td>Role</td>
        <td>Mitigate application level threats</td>
        <td>Block unauthorized access into network</td>
        </tr>
        <tr>
        <td>Customization</td>
        <td>Allows rule customization for various application logic</td>
        <td>Rules are static and allow only IP, port and protocol customization</td>
        </tr>
        <tr>
        <td>Location</td>
        <td>Front of web server (reverse proxy), along with load balancers or edge of Content Delivery Network (CDN) in case of cloud-based WAF</td>
        <td>Network perimeter</td>
        </tr>
        <tr>
        <td>Working</td>
        <td>Runs anomaly detection, heuristic or signature based algorithms</td>
        <td>Runs Proxy , packet-filtering and stateless/stateful inspection algorithms</td>
        </tr>
        </tbody>
        </table>
        <h1>Types of WAF</h1>
        <p>Due to their wide range of filtering and protection mechanisms, WAFs can be categorized based on various parameters.</p>
        <h2>Deployment Architecture</h2>
        <p>The deployment architecture of a WAF refers to the way it is integrated into the organization's network and infrastructure. A WAF's effectiveness and scalability along with its performance is determined by the location and configuration.</p>
        <h3>Network-Based</h3>
        <ul>
        <li><strong>Location</strong> - these WAFs are typically at the edge of the network perimeter acting as a gateway between external traffic and internal servers</li>
        <li><strong>Working</strong> - these WAFs analyse HTTP/HTTPS traffic and filter malicious traffic before it reaches the web server thus protecting the web application from cyber threats</li>
        <li><strong>Advantages</strong>
        <ul>
        <li>It is hardware based, hence reduces latency and has high performance</li>
        <li>Its direct control over traffic ensures it has granular control with more customization options</li>
        </ul>
        </li>
        <li><strong>Disadvantages</strong>
        <ul>
        <li>Initial investment in hardware and maintenance cost is high</li>
        <li>Less scalable compared to cloud based WAFs</li>
        </ul>
        </li>
        <li><strong>Uses</strong> - On-premise applications, requiring complete control over security infrastructure</li>
        </ul>
        <h3>Host-Based</h3>
        <ul>
        <li><strong>Location</strong> - installed directly on the server running the web application</li>
        <li><strong>Working</strong> - they work by directly monitoring and filtering the traffic reaching the server in real-time</li>
        <li><strong>Advantages</strong>
        <ul>
        <li>Deep integration with application due to rules specifically designed for the application</li>
        <li>Can be customized as per the traffic pattern or application needs</li>
        </ul>
        </li>
        <li><strong>Disadvantages</strong>
        <ul>
        <li>It runs on the same host as the server and can impact performance since it uses the host's resources</li>
        <li>Complex to configure and maintain</li>
        </ul>
        </li>
        <li><strong>Uses</strong> - Businesses with specific application logic and security requirements</li>
        </ul>
        <h3>Cloud-Based</h3>
        <ul>
        <li><strong>Location</strong> - these are hosted in the cloud, typically as a third-party service such as <em>AWS WAF</em>, <em>Cloudflare</em>. They are placed at the edge of the network or integrated with a CDN</li>
        </ul>
        <blockquote>
        <p>Content Delivery Network (CDN) is a system of distributed servers and is a vital tool for optimizing the delivery of web content, ensuring faster access, enhanced security, and a better overall user experience.</p>
        </blockquote>
        <ul>
        <li><strong>Working</strong> - similar to network-based these inspect and filter traffic before reaching server, they are maintained and configured by the third party provider</li>
        <li><strong>Advantages</strong>
        <ul>
        <li>Easily scalable and can handle spikes in the traffic</li>
        <li>Cost efficient</li>
        <li>Maintained by cloud providers reducing complexity for internal teams</li>
        </ul>
        </li>
        <li><strong>Disadvantage</strong>
        <ul>
        <li>Customization depends on provider</li>
        <li>Organization has to rely on the provider for updates, maintenance or for troubleshooting</li>
        </ul>
        </li>
        </ul>
        <h2>Operation Modes</h2>
        <p>The operation mode of a WAF determines how it interacts and handles the incoming traffic.</p>
        <h3>Inline Mode (Active)</h3>
        <p>In this mode the WAF is placed along the traffic path to actively monitor and filter incoming requests before reaching the web server. Most WAFs run in this operation mode to ensure attacks are prevented proactively. However, it can block legitimate traffic causing false positives and also introduce latency if not optimized</p>
        <h3>Monitoring Mode (Passive)</h3>
        <p>The WAF only monitors and logs potential threats and does not block them in real-time. This is often used to test and fine-tune WAF rules before deployment.</p>
        <h2>Access Control</h2>
        <p>Access control is a core functionality in WAFs and is used to regulate and restrict access to web applications based on predefined policies and rules. It can ensure that only authorized users or systems can interact with the server and application while preventing unauthorized or malicious actors from getting access.</p>
        <h3>Blocklist</h3>
        <p>Consists of a list of malicious entities such as IP, geolocation, Autonomous System Numbers (ASN) user agents, referrers or URL that should be denied access to web server and the application</p>
        <h3>Allowlist</h3>
        <p>Contains a list of allowed domains, users or IP that are trusted and safe. Some WAFs allow application level allowlist that can permit certain services (like API calls) to pass through the WAF.</p>
        <p>Allowlists can help in reducing false positives by allowing legitimate traffic without any security rules. These lists can be static or dynamic (automatically updated based on patterns and threat intelligence)</p>
        <h1>Core Functions</h1>
        <p>The core functions of a WAF mainly includes monitoring the HTTP/HTTPS traffic and analysing them for malicious requests and responses to filter malicious traffic from legitimate traffic. It protects the application against web attacks and secures the communication. It can provide robust defences against the OWASP Top 10 vulnerabilities and bot-based attacks. It further reports and maintains detailed logs of all the traffic and events, thus helping in future forensic analysis and for checking compliance and security.</p>
        <h2>Monitoring HTTP/HTTPS Traffic</h2>
        <p>WAF acts as a middle-man between the end-user and the web application. It can collect and inspect all the HTTP/HTTPS request and response traffic to detect any anomalies</p>
        <h3>Traffic Inspection</h3>
        <ul>
        <li>Each request and response is analysed for anomalies and malicious payloads</li>
        <li>It typically checks <strong>inbound</strong> traffic for abnormal activity, suspicious payloads and vulnerabilities and <strong>outbound</strong> traffic for any interception or masking and blocks sensitive data to prevent leakage.</li>
        <li>It is done by inspection of headers, cookies, query strings and POST data</li>
        </ul>
        <h3>Behavioural Analysis</h3>
        <ul>
        <li>User behaviour is tracked to identify any suspicious or unusual activities to identify <strong>rapid repeated requests</strong> which are typically an indicator of Bot-attacks or Denial of Service attacks. Rapid repeated requests can be avoided with the use of CAPTCHA or rate-limiting mechanisms.</li>
        </ul>
        <h3>Protocol Validation</h3>
        <ul>
        <li>WAF monitors requests to check for  compliance with web application policies and protocol standards. It can block any malformed requests which can exploit any application vulnerability.</li>
        </ul>
        <h3>Encrypted Traffic Inspection</h3>
        <ul>
        <li>A WAF can even analyse encrypted HTTPS traffic by decrypting and analysing the content for threats and re-encrypting it before forwarding it. This ensures a secure monitoring without compromising data integrity.</li>
        </ul>
        <h2>Protection Against Web Attacks</h2>
        <p>A WAF's main functionality is to protect web applications from attacks, while allowing legitimate traffic.</p>
        <h3>Key protection mechanisms</h3>
        <ul>
        <li><strong>OWASP</strong> - Protection is mainly ensured by designing it to identify the OWASP vulnerabilities like <em>SQLi</em>, <em>XSS</em>, <em>CSRF</em>, <em>SSRF</em>, <em>Insecure Deserialization</em> and <em>br/oken access control</em>.</li>
        <li><strong>Zero-Day</strong> - WAF uses heuristic and behavioural analysis to block it from unknown threats which cannot be detected by signature algorithms.</li>
        <li><strong>DDoS Protection</strong> - WAF applies rate-limiting and filtering to ensure access to legitimate users during spikes.</li>
        <li><strong>Bot Management</strong> - WAF should not just block all bot activities, it should be able to distinguish malicious bot activities like scraping sensitive data or credential stuffing from beneficial bots like search engine crawlers. This is typically done through <em>bot fingerprinting</em> and <em>challenge-response</em>.</li>
        <li><strong>SSL/TLS Inspection</strong> - Encrypted payload often bypasses firewalls, a WAF can decrypt the traffic to analyse it for threats and re-encrypt it before forwarding, this ensures that secure communication doesn't lead to hidden attacks.</li>
        <li><strong>Input Sanitization</strong> - WAFs examine the user inputs to ensure they follow input format and sanitize it to avoid any malicious payloads from causing a SQL injection or command injection on the web application.</li>
        </ul>
        <h2>Logging</h2>
        <p>Logging is a core feature of WAF and it provides detailed records of application activity and security events. They also help in analysing user behaviours while also detecting suspicious incidents and ensuring compliance.</p>
        <h3>Types of logging</h3>
        <ul>
        <li><strong>Traffic Logging</strong> - logs incoming and outgoing traffic including IP, methods, headers and parameters along with URLs. It can also help in identifying user behaviour and application performance.</li>
        <li><strong>Security Event Logging</strong> - a WAF should record incidents that have any suspicious activity, incidents like blocked authorization, DDoS or Bot attacks, Client side attacks like SQLi or XSS along with the triggered rule or signature that classified it as malicious activity</li>
        <li><strong>Forensic Analysis</strong> - the logged details should be able to provide an audit trail for <em>post-incident</em> investigations, this would enable teams to identify the attack vectors and find the compromised data and the point of entry.</li>
        </ul>
        <h1>Working</h1>
        <p>A web Application Firewall (WAF) operates by filtering analysing and blocking malicious web traffic. It uses advanced methods such as <em>rule-based filtering</em>, <em>behavioural analysis</em> and <em>OWASP Protection</em>.</p>
        <h3>Rule Based Filtering</h3>
        <p>A foundational technique used by WAFs is rule-based filtering. It relies on some custom predefined rules to analyse and evaluate inbound and outbound traffic and take actions based on the ruleset. The ruleset contains some <strong>static rules</strong> which are predefined rules for known attacks such as SQLi which could have payloads like <code>SELECT * FROM &lt;database&gt; WHERE 1=1;</code> or XSS which uses payloads like <code>&lt;script&gt;malicious content &lt;/script&gt;</code>.</p>
        <p>The WAF can also be configured for some custom rules based on specific applications and user behaviour. Typical actions include <em>block</em> or <em>allow</em> traffic or <em>flagging</em> for inspection. Further it can make use of challenges (Eg: CAPTCHA) to make decisions and employ rate-limiting to protect the resources from being exploited.</p>
        <h3>Behavioural Analysis</h3>
        <p>Unlike the rule-based filtering, this method focuses on identifying the underlying pattern and behaviour to capture a threat rather than using static rules. This is more effective when sophisticated attacks like zero-day threats that cannot be stopped by signature based algorithms and rule-based filtering is involved.</p>
        <p>Behaviour analysis works by setting a <em>baseline</em> behaviour which defines the normal expected user behaviour to establish a traffic pattern. This baseline is used to detect anomalies and flag requests that deviate from expected behaviour. This could include high requests rates from single user IP which could be a sign of DDoS or a huge number of failed authentications that could indicate br/ute-force attempts.</p>
        <p>More advanced behavioural analysis model WAFs use machine learning to train and refine the prediction to increase accuracy and reduce false positives. This can help in improved threat identification and perform better than the classical signature based detection.</p>
        <h3>OWASP Protection</h3>
        <p><strong>OWASP Top 10</strong> lists the most critical web application vulnerabilities and is updated regularly by the Open Web Application Security Project (OWASP). WAFs are designed such that they can identify and mitigate the vulnerabilities in this list, which helps them focus on main security flaws and mitigate threats arising due to those flaws.</p>
        <p>The main protections involve SQLi which searches for malicious SQL queries in input or query fields. Filter scripts that may be added into webpages to prevent XSS and prevent CSRF with the tokens that can validate the user and their actions. WAFs can be configured to check for system misconfigurations or issues in application design. This could include permissive access controls or missing or malformed headers.</p>
        <h2>Key Components</h2>
        <p>The WAF uses various components that are required to capture, analyse, detect, filter and secure web traffic to ensure protection for web applications</p>
        <h3>Traffic Inspection Engine</h3>
        <h4>Purpose</h4>
        <p>Analyse incoming and outbound traffic for malicious payloads and identify anomalies and exploits. Apply filters and also carry out behavioural analysis on the traffic. Combination of traffic collection and rule engine components</p>
        <h4>Functions</h4>
        <ul>
        <li>Examine HTTP/HTTPS requests and responses</li>
        <li>Identify anomalies and exploits or policy violations</li>
        <li>Apply filtering rules and behavioural analysis</li>
        </ul>
        <h3>Signature Database</h3>
        <h4>Purpose</h4>
        <p>Stores all the predefined patterns of known attack methods</p>
        <h4>Functions</h4>
        <ul>
        <li>Matches traffic against a database of attack signatures and OWASP vulnerabilities</li>
        <li>Stores IP reputation through blacklists</li>
        <li>Updates regularly to include new threat patterns</li>
        </ul>
        <h3>Policy Engine</h3>
        <h4>Purpose</h4>
        <p>Allows administrators to define and enforce security policies for the WAF</p>
        <h4>Functions</h4>
        <ul>
        <li>Customizes rules based on application needs (blocklist or allowlist)</li>
        <li>Configure specific actions for detected threats which could include logging alerting or blocking it</li>
        </ul>
        <h3>Behavioural Analysis Module</h3>
        <h4>Purpose</h4>
        <p>Detect threats through anomalies and unusual traffic patterns</p>
        <h4>Functions</h4>
        <ul>
        <li>Establish a baseline behaviour to flag deviation</li>
        <li>Identify zero day attacks and unknown threats</li>
        </ul>
        <h3>SSL/TLS Decryption and Encryption Module</h3>
        <h4>Purpose</h4>
        <p>Inspect encrypted HTTPS traffic for  malicious content and re-encrypt before forwarding</p>
        <h4>Functions</h4>
        <ul>
        <li>Decrypt encrypted traffic and analyse</li>
        <li>Re-encrypt traffic and forward to application</li>
        </ul>
        <h3>Logging and Reporting System</h3>
        <h4>Purpose</h4>
        <p>Record traffic details and security events for analysis</p>
        <h4>Functions</h4>
        <ul>
        <li>Log blocked requests, flagged anomalies and all application activities</li>
        <li>Generate detailed reports for security audits and forensic analysis</li>
        </ul>
        <h3>Management Interface</h3>
        <h4>Purpose</h4>
        <p>Administrator use for configuration, monitoring and maintaining WAF</p>
        <h4>Functions</h4>
        <ul>
        <li>Offer real-time traffic insights through dashboards</li>
        <li>Allow policy updates and new rules creation</li>
        </ul>
        <h3>Real-Time Alerting System</h3>
        <h4>Purpose</h4>
        <p>Notify admins of any security incidents</p>
        <h4>Functions</h4>
        <ul>
        <li>Alerts sent for security events like attempt for exploits or policy violations</li>
        <li>Include br/ief details on the nature and origin of the event</li>
        </ul>
        <h3>Virtual Patching System</h3>
        <h4>Purpose</h4>
        <p>Offer temporary protection against found vulnerabilities until it is mitigated, without changing the application code</p>
        <h4>Functions</h4>
        <ul>
        <li>Block exploitation attempts for known vulnerabilities</li>
        <li>Sanitize input to avoid any client side attack</li>
        </ul>
        <h3>Load Balancing and Performance Optimization</h3>
        <h4>Purpose</h4>
        <p>Ensure that the application is available and performs optimally</p>
        <h4>Functions</h4>
        <ul>
        <li>Distribute traffic evenly across servers to ensure performance and avoid overload</li>
        </ul>
        <h2>References</h2>
        <ol>
        <li>https://www.sitewall.net/anatomy-of-a-waf-understanding-core-components-and-their-functions/</li>
        <li>https://coralogix.com/guides/web-application-firewall/waf-architecture-3-key-components-and-deployment-models/</li>
        <li>https://cloudairy.com/blog/waf-architecture-key-components-and-how-it-works-</li>
        <li>https://graylog.org/post/application-monitoring-with-a-web-application-firewall-waf-for-network-security/</li>
        <li>https://owasp.org/www-project-top-ten/</li>
        <li>https://developers.cloudflare.com/waf/</li>
        </ol>        
        </div>)
}