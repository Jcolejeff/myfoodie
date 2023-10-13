import BlogCard from 'components/general/Card';
import FunkyPagesHero from 'components/general/FunkyPagesHero';
import LinksFilter from 'components/general/LinksFilter';
import SearchComboBox from 'components/general/SearchComboBox';
import PlanGuard from 'guards/PlanGuard';
import blogImg from 'assets/image/blogImg.png?format=webp&w=330&h=280&imagetools';
import dpIcon from 'assets/image/demoDp.jpg?format=webp&imagetools';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import demoAd from 'assets/image/blogImg.png';
import Icon from 'utils/Icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components/shadcn/dropdown-menu';
import { useQuery } from '@tanstack/react-query';
import contentService from 'services/content';
import { processError } from 'helper/error';
import ContentLoader from 'components/general/ContentLoader';
import { apiInterface, contentApiItemInterface } from 'types';
import FeaturedLoader from 'components/Loaders/FeaturedLoader';
import CONSTANTS from 'constant';
import { useNavigate } from 'react-router-dom';

const BlogInternal = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<any, any, apiInterface<contentApiItemInterface[]>>({
    queryKey: ['get-blogs'],
    queryFn: () =>
      contentService.getContent({
        organization_id: import.meta.env.VITE_TIMBU_ORG_ID,
        category: CONSTANTS.TIMBU_KEYS.BLOG_ID,
      }),
    onError: (err) => {
      processError(err);
    },
  });

  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero description='Explore Filmmaking blogs' title='Blogs' />
      <PlanGuard page='blogs'>
        <>
          <div className='w-full max-w-[800px] relative mx-auto my-[1.5rem] md:my-0 md:mb-[1rem] md:-top-[1.5rem]'>
            <SearchComboBox />
          </div>
          <div className='flex justify-center w-full mb-[2.5rem]'>
            <LinksFilter
              tabs={[
                {
                  link: ``,
                  sublinks: [
                    { title: `Best tv shows`, link: `` },
                    { link: ``, title: `Awards` },
                  ],
                  title: `General`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Production`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Post-production`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Distribution and Marketing`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Animation/vfx`,
                },
              ]}
            />
          </div>

          <div className='flex items-center justify-between w-full mb-[2.5rem]'>
            <h4 className='text-[16px] sm:text-[1.125rem] text-primary-9 font-[600] leading-[1.5rem] tracking-[0.00938rem]'>
              Featured Blogs
            </h4>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1'>
                <span className='text-primary-9 text-[14px] leading-[1.5rem] tracking-[0.00938rem]'>
                  Sorting:
                </span>
                <span className='text-primary-1 text-[14px] leading-[1.5rem] tracking-[0.00938rem]'>
                  Popularity
                </span>
                <Icon name='arrowDown' />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Top Blogs</DropdownMenuItem>
                <DropdownMenuItem>latest: Acsending</DropdownMenuItem>
                <DropdownMenuItem>Latest: Decending</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <FeaturedLoader isLoading={isLoading}>
            <div className='flex flex-col items-center gap-8 lg:flex-row mb-[2.5rem]'>
              <div className='w-full max-w-[424px] rounded-[8px] overflow-hidden'>
                <LazyLoadImage
                  placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  className='w-full h-full bg-cover'
                  src={`${CONSTANTS.TIMBU_KEYS.IMAGE_BASE_URL}/${data?.items[0]?.photos?.[0]?.url}`}
                  effect='blur'
                  alt=' '
                />
              </div>
              <div className='flex flex-col justify-center gap-4 max-w-[30rem]'>
                <span className='text-primary-1 font-[600] text-[14px] leading-[21px] tracking-[0.1px] '>
                  Production
                </span>
                <h5 className='font-[700] text-[32px] text-primary-9 leading-[43px]'>
                  {data?.items[0]?.title}
                </h5>
                <p className='font-[300] text-[14px] text-secondary-2 leading-[21px] tracking-[0.15px]'>
                  {data?.items[0]?.subtitle}
                </p>
                <button
                  onClick={() => navigate(`${data?.items[0]?.id}`)}
                  className='w-max py-[0.75rem] px-[1.5rem] bg-primary-1 rounded-[8px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ease-in-out duration-300 group'
                >
                  <span className='leading-[28px] tracking-[0.15px] text-white'>Check it Out</span>
                  <Icon
                    name='arrow45'
                    svgProp={{
                      className:
                        'group-hover:translate-x-[2px] transition-transform duration-300 ease-in-out',
                    }}
                  />
                </button>
              </div>
            </div>
          </FeaturedLoader>

          <ContentLoader isLoading={isLoading} numberOfBlocks={6}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-[1.5rem] gap-y-[2.5rem]'>
              {data?.items?.map((i, idx) => (
                <div key={idx} className='w-full h-full'>
                  <BlogCard
                    authorImg={dpIcon}
                    authorName={`${i?.content_author?.first_name} ${i?.content_author?.last_name}`}
                    authorRole={`${i?.content_author?.email}`}
                    blogImage={`${CONSTANTS.TIMBU_KEYS.IMAGE_BASE_URL}/${i?.photos?.[0]?.url}`}
                    category={`Production`}
                    date={`18 April, 2022`}
                    description={i?.subtitle}
                    title={i?.title}
                    link={`${i?.id}`}
                  />
                </div>
              ))}
            </div>
          </ContentLoader>
        </>
      </PlanGuard>
    </div>
  );
};

export default BlogInternal;
