import Link from 'next/link';

function Home() {
    return (                            
        <div>
            <h1>this is my Next.js webpage About section</h1>
            <p>This is the home page.</p>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/About'>About</Link></li>
                <li><Link href='/Contact'>Contact</Link></li>
                <li><Link href='/Footer'>Footer</Link></li>                        
            </ul>
        </div>
    );
}

export default Home;

