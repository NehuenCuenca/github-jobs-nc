<template>
  <div class="job-aplication-page">
    <div class="aside">
      <RouterLink class="to-home" :to="{ name: 'Home' }">⬅ Back to search</RouterLink>

      <div class="how-to-apply">
        <span class="subtitle">How to Apply</span>
        <p>Please email a copy of your resume and online portfolio to <a href="mailto:wes@kasisto.com">wes@kasisto.com</a>
          & CC <a href="mailto:eric@kasisto.com">eric@kasisto.com</a>
        </p>
      </div>
    </div>

    <div class="job-description">
      <div class="job-data">
        <span class="charge-title">Title of job</span>
        <span class="full-time-tag">Full time</span>
        <span class="published-at">🕒 X days ago</span>
      </div>

      <div class="company-data">
        <img src="" alt="company-img" class="company-img">
        <span class="company-name">Company name</span>
        <span class="company-location">🌎 Location</span>
      </div>


      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores odit natus perferendis
        recusandae ad cumque aperiam, et molestias? Eum adipisci quidem voluptate sapiente ipsum amet animi praesentium,
        suscipit eveniet quaerat!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis autem consequuntur? Laborum, id! Dolor
        deleniti labore eos at voluptas impedit error incidunt ipsam, a laborum explicabo inventore modi ducimus?
        Totam fugit tenetur exercitationem libero distinctio repellat voluptatum sunt eum, nisi incidunt ad nesciunt illum
        pariatur culpa cum omnis, molestiae quo ut aspernatur? In mollitia laborum earum, saepe quo iusto.
        Ea amet aliquam beatae mollitia repellat quibusdam vero, aspernatur maiores impedit totam a voluptate
        necessitatibus debitis obcaecati molestias praesentium aut hic assumenda eos quaerat quod alias vitae et!
        Voluptatem, aperiam?
        Doloribus placeat distinctio quisquam repellendus, possimus deserunt veritatis, voluptatum dolorum earum debitis
        assumenda laboriosam! Earum maxime magnam at iste? Pariatur, aliquam. Voluptatem cupiditate accusamus voluptate
        repellendus quasi exercitationem eligendi corporis!
        Corporis totam facilis molestiae excepturi laborum ad! Inventore aspernatur exercitationem numquam ut cupiditate
        illo. Adipisci, deserunt. Optio libero natus reprehenderit! Similique, dolores eius in at incidunt error corrupti
        repellendus minus?
        A nesciunt itaque fuga mollitia dolore, placeat nisi velit laudantium quibusdam, explicabo nostrum deleniti
        asperiores? Ut libero sequi soluta, vitae culpa eius! Doloribus, quidem. Adipisci saepe molestias nostrum veniam
        id.
        Eligendi temporibus numquam sed cum minus labore? Ut, culpa magnam itaque iusto reiciendis quos perspiciatis
        doloremque nihil, possimus asperiores animi eveniet eum aut illo ea aspernatur quidem unde ducimus. Quaerat.
        Asperiores aut sequi ratione eaque officiis cumque! Consectetur consequatur delectus exercitationem atque cumque
        temporibus impedit quod magnam perferendis voluptate aut maiores enim voluptates quibusdam veritatis minus, ea
        odio culpa possimus.
        Sint modi, placeat tempora minus adipisci alias eius aliquam quaerat earum voluptas neque natus distinctio
        delectus obcaecati. Beatae qui consequatur odit mollitia minus repellendus accusantium? At nisi iusto neque
        doloremque.
        Id animi culpa doloribus totam voluptate perferendis sunt eligendi ipsum enim voluptatum recusandae dolore sit
        laboriosam reiciendis, dicta blanditiis consequuntur tempore non quidem libero nesciunt odio eveniet. Suscipit,
        maxime temporibus.</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'JobAplication',
  setup() {
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>
.job-aplication-page {
  padding: 4vh 0;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;
  grid-template-areas: "aside jobDescription";
  gap: 2vw;
}

.aside {
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: 2vh 0;
}

a.to-home {
  color: var(--brigthBlue);
  font: 500 14px 'Poppins', sans-serif
}


.how-to-apply .subtitle {
  color: var(--placeholderGrey);
  font: 700 14px 'Poppins', sans-serif;
}

.how-to-apply p {
  margin-top: 10px;
  font: 500 14px 'Poppins', sans-serif;
  color: var(--darkOceanBlue);
}

p a {
  color: var(--brigthBlue);
}

.job-description {
  grid-area: jobDescription;
  display: flex;
  flex-direction: column;
  gap: 2vh 0;
}

.job-data {
  width: 40%;
  display: grid;
  grid-template-columns: .5fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "chargeTitle fullTimeTag"
    "publishedAt ."
  ;
  gap: 1vh 0;
}

.job-data .charge-title {
  grid-area: chargeTitle;
  font: 700 1.25rem 'Roboto', sans-serif;
  color: var(--darkOceanBlue);
}

.job-data .full-time-tag {
  grid-area: fullTimeTag;
  border: 1px solid var(--darkOceanBlue);
  border-radius: 4px;
  font: 700 12px 'Roboto', sans-serif;
  color: var(--darkOceanBlue);
  place-self: center start;
  padding: 3px;
}

.job-data .published-at {
  grid-area: publishedAt;
  color: var(--placeholderGrey);
  font: 500 12px 'Roboto', sans-serif;
}

.company-data {
  height: 42px;
  width: fit-content;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "companyImg companyName"
    "companyImg companyLocation"
  ;
  gap: 1vh .5vw;
}

.company-data .company-img {
  grid-area: companyImg;
  height: 100%;
  width: 42px;
  place-self: center start;
  background-color: #F2F2F2;
  border-radius: 4px;
  color: #BDBDBD;
  font: 500 12px 'Roboto', sans-serif;
  text-align: center;
}

.company-data .company-name {
  grid-area: companyName;
  place-self: center start;
  font: 700 1.125rem 'Roboto', sans-serif;
  color: var(--darkOceanBlue);
}

.company-data .company-location {
  grid-area: companyLocation;
  place-self: center start;
  font: 500 12px 'Roboto', sans-serif;
  color: var(--placeholderGrey);
}

p.description {
  color: var(--darkOceanBlue);
  font: 400 1rem 'Roboto', sans-serif;
  line-height: 1.5rem;
}

@media (max-width: 375px) {
  .job-aplication-page {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      "aside"
      "jobDescription";
    gap: 6vh 0;
  }


  .job-description {
    grid-area: jobDescription;
    display: flex;
    flex-direction: column;
    gap: 5vh 0;
  }

  .job-data {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "chargeTitle"
      "fullTimeTag"
      "publishedAt";
  }

  .company-data {
    gap: 1vh 2vw;
  }

  .company-data .company-img {
    place-self: center;
  }

  .company-data .company-name {
    place-self: end start;
  }

  .company-data .company-location {
    place-self: start;
  }

}
</style>