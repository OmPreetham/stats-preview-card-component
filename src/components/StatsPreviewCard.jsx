const StatsPreviewCard = () => {
  return (
    <section>
      <article>
        <div>
          <h1>
            Get <strong>insights</strong> that help your business grow.
          </h1>
          <p className="desc">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className="stats">
          <div>
            <p className="top">10k+</p>
            <p className="stat-headings">companies</p>
          </div>
          <div>
            <p className="top">314</p>
            <p className="stat-headings">templates</p>
          </div>
          <div>
            <p className="top">12M+</p>
            <p className="stat-headings">queries</p>
          </div>
        </div>
      </article>
      <article>
        <div className="image-container">
          <picture>
            <source
              media="(min-width: 550px)"
              srcSet="./images/image-header-mobile.jpg"
            />
            <img src="./images/image-header-desktop.jpg" alt="Hero Image" />
          </picture>
        </div>
        <div className="overlay"></div>
      </article>
    </section>
  )
}
export default StatsPreviewCard
