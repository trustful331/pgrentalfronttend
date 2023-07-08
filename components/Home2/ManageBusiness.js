import Link from 'next/link';

const ManageBusiness = () => {
  return (
    <>
      <section className='manage-your-business-area bg-main-color'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='manage-your-business-image'>
                <img src='/images/woman.jpg' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='manage-your-business-content'>
                <h2>
                  Manage your online reputation and take control of how people
                  find your business
                </h2>
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Link href='/dashboard/add-listing'>
                  <a className='default-btn'>
                    <i className='flaticon-more'></i> Add Listing
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageBusiness;
