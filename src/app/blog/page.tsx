import Image from 'next/image';

export default function Blog() {
  return (
    <div className="min-h-screen -mt-[7rem] bg-black">
      <div className="hero-section-holder high-top-padding">
        <div className="container">
          <div className="global-padding no-top-padding">
            <div className="center-layout">
              <div className="title-holder">
                <div className="animate-on-load-01">
                  <a
                    data-w-id="8f52ce4c-de64-63fc-b588-16eac86684fe"
                    href="/about"
                    className="header-tag-holder margin-bottom w-inline-block"
                  >
                    <div className="regular-p2 about">About us</div>
                  </a>
                  <h1>
                    Read Professionally Written Articles&nbsp;
                    <br />
                    About AI
                  </h1>
                </div>
                <div className="animate-on-load-02">
                  <div className="subtitle-holder">
                    <div className="subtitle-text">
                      Our AI-powered tool takes your ideas and turns them into captivating, reader-friendly content that resonates with your audience.
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-grid-holder">
                <div className="w-dyn-list">
                  <div role="list" className="cms-grid w-dyn-items">
                    {[
                      {
                        href: '/post/using-ai-generated-content-from-our-saas-for-better-marketing',
                        imageSrc: 'https://cdn.prod.website-files.com/6700ee976677a427228396a4/6700ee976677a42722839774_Blog-Image-4.jpg',
                        alt: 'AI Content Marketing',
                        category: 'Content Creation',
                        date: 'October 1, 2023',
                        title: 'Using AI-Generated Content from Our SAAS for Better Marketing',
                      },
                      {
                        href: '/post/how-our-ai-software-revolutionizes-your-content-marketing',
                        imageSrc: 'https://cdn.prod.website-files.com/6700ee976677a427228396a4/6700ee976677a42722839739_Blog-Image-3.jpg',
                        alt: 'AI Marketing Revolution',
                        category: 'AI Tools',
                        date: 'October 1, 2023',
                        title: 'How Our AI Software Revolutionizes Your Content Marketing',
                      },
                      {
                        href: '/post/crafting-compelling-content-with-our-saas-ai-software',
                        imageSrc: 'https://cdn.prod.website-files.com/65150f6175f862fac1276a7a/65192a70c04b47c8b1ffec18_Blog-Image-2.jpg',
                        alt: 'Compelling AI Content',
                        category: 'Marketing',
                        date: 'October 1, 2023',
                        title: 'Crafting Compelling Content with Our SAAS AI Software',
                      },
                      {
                        href: '/post/how-our-ai-software-enhances-your-writing-efficiency',
                        imageSrc: 'https://cdn.prod.website-files.com/6700ee976677a427228396a4/6700ee976677a427228396d8_Blog-Image-1.jpg',
                        alt: 'AI Writing Efficiency',
                        category: 'AI Tools',
                        date: 'October 1, 2023',
                        title: 'How Our AI Software Enhances Your Writing Efficiency',
                      },
                    ].map(({ href, imageSrc, alt, category, date, title }, index) => (
                      <div key={index} role="listitem" className="cms-grid-item-wrapper w-dyn-item">
                        <a href={href} className="cms-content-link w-inline-block">
                          <div className="cms-image-holder">
                            <Image
                              src={imageSrc}
                              alt={alt}
                              width={1340}
                              height={760}
                              className="cms-image"
                            />
                          </div>
                          <div className="cms-content-holder">
                            <div className="post-meta-content">
                              <div className="category-name">{category}</div>
                              <div className="post-meta-date">{date}</div>
                            </div>
                            <div className="blog-grid-title">{title}</div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
