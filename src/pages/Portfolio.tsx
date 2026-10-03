import React from 'react'
import Bottoms from '@/components/Bottoms'
import { Separator } from "@/components/ui/separator"
import PortfolioImage from '@/components/PortfolioImage'
import Consulting from '@/components/Consulting'
import { useState } from "react";




const PortfolioImg: PortfolioItem[] = [


    { imge: '/picture/Component 650 (1).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/Component 650 (2).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/Component 650 (3).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/Component 650 (4).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (5).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (6).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (7).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (8).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (9).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (10).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (11).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (12).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (13).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (14).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (15).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (16).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (17).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (18).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (19).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (20).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (21).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (22).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (23).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
    { imge: '/picture/component 650 (24).png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/Component 517.png', word: 'لوگو' },
]
interface PortfolioItem {
  imge: string;
  title: string;
  paraghraf: string;
  logo: string;
  word: string;
}
const Portfolio = () => {
     const [showLastEight, setShowLastEight] = useState(false);

  const displayedPortfolio: PortfolioItem[] = showLastEight
    ? PortfolioImg.slice(-8)
    : PortfolioImg;
    return (
        <div className='pt-15'>

            <h1 className='text-2xl pr-13 pt-5 '>نمونه کار</h1>
            <div className='w-160 pt-2 pr-13 max-sm:w-60 max-lg:w-100  '>
                <Separator />
            </div>
            <div className='flex'>
                <Bottoms setShowLastEight={setShowLastEight} />
            </div>
            <div className='w-full flex justify-center items-center '>
            <div className='grid grid-cols-4 space-y-33  gap-x-6.5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 '>
                {displayedPortfolio.map((index,i )=> (
                    
                        <PortfolioImage
                            key={i}
                            imge={index.imge}
                            title={index.title}
                            paraghraf={index.paraghraf}
                            logo={index.logo}
                            word={index.word}
                        />
                
                        ))}
            </div>
            </div>
            <div className='max-sm:pt-30 pb-5'>
                <Consulting />
            </div>





        </div>
    )
}

export default Portfolio
