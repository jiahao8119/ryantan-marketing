import Vue from 'vue'
import { mapState } from 'vuex'
import StyledExperience from './styles'
import { OlaoluWorkIllo } from '@/assets'
import { CURRENT_SECTION } from '@/constants'

const Experience = Vue.component('Experience', {
  computed: mapState([CURRENT_SECTION]),

  render() {
    const isVisible = this.currentSection === 'trois'

    return (
      <StyledExperience name={this.name}>
        <div class="inner-content">
          <Cavalier
            theme="lime"
            heading={`Over the <br /> past ${new Date().getFullYear() -
              2024} years,`}
          >
            <p slot="text">
              Our team has designed and developed websites and digital solutions
              for businesses across various industries — from corporate sites
              and e-commerce platforms to web apps and custom systems.
            </p>

            <p slot="text">
              We focus on building fast, elegant, and responsive web experiences
              that deliver results. Whether it's improving user experience,
              increasing conversions, or streamlining backend operations — we
              build for impact.
            </p>

            <p slot="text">
              Clients trust us for clean code, scalable architecture, and a
              commitment to quality. We believe every project should not only
              look good, but also work flawlessly across all devices and
              platforms.
            </p>

            <p slot="text">
              We've worked with startups, SMEs, and organizations locally and
              internationally — helping them establish and grow their online
              presence with confidence.
            </p>

            {this.hireable && (
              <p slot="text">
                We’re currently accepting new projects and partnerships. Ready
                to launch something amazing?{' '}
                <a
                  href={`mailto:hello@youragency.com?subject=${encodeURIComponent(
                    "🚀 Let's Build Your Next Web Project"
                  )}`}
                >
                  Contact us today.
                </a>
              </p>
            )}
          </Cavalier>

          <figure class="work-illo" aria-hidden={!isVisible}>
            <OlaoluWorkIllo />
            <figcaption class="visuallyhidden">
              Illustration representing our team’s work and portfolio.
            </figcaption>
          </figure>
        </div>
      </StyledExperience>
    )
  },
  props: ['name'],
})

export default Experience
