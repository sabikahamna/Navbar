"use client"
import  {useRouter} from 'next/navigation';

import Link from 'next/link';

function Home() {
    const rout = useRouter();
    return    <div>                  
        
            <h1>welcome to my  Next.js webpage</h1>
            <p>This is the Home Page.</p>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/About'>About</Link></li>
                <li><Link href='/Contact'>Contact</Link></li>
                <li><Link href='/Footer'>Footer</Link></li>                        
            </ul>
            <button onClick={() =>rout.push('/')}>Go to Home page</button>
            <br/><br/>
            <button onClick={() =>rout.push('/About')}>Go to About page</button>
            <br/><br/>
            <button onClick={() =>rout.push('/Contact')}>Go to Contact page</button>
            <br/><br/>
            <button onClick={() =>rout.push('/Footer')}>Go to Footer page</button>
            <br/><br/>
        </div>
    
}

export default Home;
