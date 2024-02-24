
import '@/styles/globals.css'
import React from 'react'


export const metadata = {
    title: "Behati | Home",
    description: "Behati est une plateforme de vente de produit naturel cultivés sur le sol Camerounais", 
}

type Props = {
    children:  React.ReactNode
}
 
const RoutLayout: React.FC<Props> = ({ children }) => {
  return (
    
    <html lang='en'>
        <body>
            <main className='main'>
                { children }
            </main>
        </body>
    </html>
  )
}

export default RoutLayout
