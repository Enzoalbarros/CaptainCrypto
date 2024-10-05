import React from 'react';
import { Link } from 'react-router-dom';


const Information = () => {
    return (
        <div>
            <Link to="/">
            <ul>
                <li>
                <button className="btn inset-x-0.5 text-3xl">Home</button>
                </li>
            </ul>
            </Link>
            <><div className="container mx-auto p-8 font-sans text-gray-800">
            <img 
                    src="/images/pirateLogo.webp"
                    alt="logo" 
                    className="mx-auto mb-8 w-48 h-48 object-cover rounded-full"
                  />
                <h1 className="text-4xl font-mono mb-8 text-center">Information Page</h1>

                <section className="mb-6">
                    <h2 className="text-3xl font-mono mb-4">Introduction to Cryptocurrency</h2>
                    <p className="text-left tracking-wide font-light">Cryptocurrency is a form of digital currency that operates on decentralized networks using blockchain technology. Unlike traditional currencies, which are controlled by governments and financial institutions, cryptocurrencies are decentralized and operate without a central authority. Blockchain technology ensures that transactions are secure, transparent, and immutable, creating a public ledger that anyone can view. This innovation has revolutionized the way people perceive money and has opened new doors to financial systems without the need for intermediaries like banks.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-mono mb-4">Popular Cryptocurrencies</h2>
                    <p className="text-left tracking-wide font-light">Several cryptocurrencies have emerged as leaders in the market due to their widespread adoption and unique use cases. Bitcoin (BTC) is the first and most recognized cryptocurrency, often referred to as "digital gold" due to its limited supply and store of value. Ethereum (ETH) has gained popularity for its smart contract functionality, enabling decentralized applications (dApps) and revolutionizing industries beyond finance. Dogecoin (DOGE), initially created as a joke, has built a loyal community and gained mainstream attention, becoming widely accepted for tipping and micro-transactions.</p>
                    <img 
                    src="/images/crypto-image1.webp"
                    alt="crypto moedas" 
                    className="mx-auto mb-8 w-full h-60 object-cover rectangle-full"
                  />
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-mono mb-4">How Cryptocurrency Works</h2>
                    <p className="text-left tracking-wide font-light">Cryptocurrencies work by utilizing blockchain technology, which is a distributed ledger system that records transactions across multiple computers in a network. When a transaction is initiated, it gets broadcast to the network, and participants (nodes) work to verify the transaction through consensus mechanisms such as Proof of Work (PoW) or Proof of Stake (PoS). In PoW, powerful computers solve complex mathematical problems to confirm transactions, a process known as mining. In PoS, participants validate transactions by staking their coins as collateral, which also secures the network. Once verified, the transaction is permanently added to the blockchain.</p>
                    <img 
                    src="/images/Math_Lady_meme.jpg"
                    alt="thinking " 
                    className="mx-auto mb-8  h-80 object-cover rectangle-full"
                  />
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-mono mb-4">How to Buy and Store Cryptocurrency</h2>
                    <p className="text-left tracking-wide font-light">To buy cryptocurrency, users typically go through exchanges like Binance or Coinbase, where they can trade traditional currency (like USD) for cryptocurrencies. Once purchased, it's essential to store the digital assets safely. Cryptocurrencies are stored in wallets, which can be either hot wallets (online and connected to the internet) or cold wallets (offline and more secure from hacking). Hot wallets are convenient for frequent transactions, while cold wallets, like hardware wallets, are ideal for long-term storage. Always remember to enable two-factor authentication (2FA) and keep your private keys safe, as they are the only way to access your funds.</p>
                    <img 
                    src="/images/tio-patinhas.jpg"
                    alt="crypto moedas" 
                    className="mx-auto mb-8 h-auto w-auto object-cover rectangle-full"
                  />
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-mono mb-4">Use Cases</h2>
                    <p className="text-left tracking-wide font-light" >Cryptocurrency has numerous use cases that go beyond just an investment asset. It can be used as a payment method, allowing people to send and receive money across borders with minimal fees. In addition to payments, decentralized finance (DeFi) platforms enable users to lend, borrow, and earn interest on their cryptocurrency holdings without the need for traditional banks. Cryptocurrencies also power the emerging world of Non-Fungible Tokens (NFTs), where unique digital assets like art, music, and collectibles are bought and sold using blockchain technology. Ethereum is the most popular platform for these decentralized applications.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-mono mb-4">Risks and Challenges</h2>
                    <p className="text-left tracking-wide font-light">Despite its growing popularity, cryptocurrency comes with significant risks and challenges. Volatility is one of the most notable risks, with prices fluctuating drastically in short periods, making it a risky investment for those who cannot tolerate high levels of uncertainty. Regulations surrounding cryptocurrency are still evolving, and legal frameworks differ from one country to another, creating ambiguity around its use and acceptance. Additionally, scams and fraud are common in the crypto world. Users should be cautious of phishing attacks, fraudulent ICOs (Initial Coin Offerings), and Ponzi schemes, and always do their due diligence before investing in new projects.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-3xl font-mono mb-4">Future of Cryptocurrency</h2>
                    <p className="text-left tracking-wide font-light">The future of cryptocurrency is full of exciting possibilities as more industries and individuals adopt blockchain technology. Emerging trends include Web3, which envisions a decentralized internet where users have more control over their data and digital identities. NFTs continue to grow, with artists, musicians, and even real estate developers exploring their potential. Furthermore, several central banks are exploring the creation of Central Bank Digital Currencies (CBDCs), which would bring blockchain technology into the traditional financial system. As technology evolves, cryptocurrency is expected to play a significant role in the future of finance, identity management, and decentralized governance.</p>
                    <img 
                    src="/images/graph2.jpeg"
                    alt="crypto moedas" 
                    className="mx-auto mb-8  object-cover rectangle-full"
                  />
                </section>
                <footer className=" py-4 text-center mt-8">
                    <p className="text-sm">
                        © 2024 CaptainCrypto. All Rights Reserved. |<p className="text-black-400 underline">Privacy Policy</p>
                    </p>
                </footer>
            </div></>
        </div>

    );
};

export default Information;

