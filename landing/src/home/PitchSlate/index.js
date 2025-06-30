import Vue from 'vue'
import StyledPitchSlate from './styles'
import { Navigation } from '@/components'
import { LogomarkOutline } from '@/assets'
import { NAVIGATION_ID } from '@/constants'

const PitchSlate = Vue.component('PitchSlate', {
  props: ['name'],
  methods: {
    renderHighlights({ vocalize = false }) {
      return (
        <ul
          aria-hidden={!vocalize}
          aria-label={!vocalize ? null : 'Highlights.'}
          class={'highlights' + (vocalize ? ' visuallyhidden' : '')}
        >
          <li>
            We craft modern, responsive websites tailored to your business
            needs.
          </li>
          <li>Specialized in Landing page, and mobile-friendly design.</li>
          <li>
            Trusted by startups and SMEs to build scalable, results-driven
            solutions.
          </li>
        </ul>
      )
    },
  },

  render() {
    return (
      <StyledPitchSlate name={this.name}>
        <div class="inner-content primary">
          {!this.isMediumScreen && (
            <LogomarkOutline id="sauce-drip-outline" data-shape />
          )}

          <Cavalier
            theme="lime"
            text="I like to craft solid and scalable frontend products with great user experiences."
          >
            <h1 slot="heading" aria-label="Frontend Developer">
              <span aria-hidden="true">
                BCH
                <br /> Development
              </span>
            </h1>

            {this.renderHighlights({ vocalize: true })}
          </Cavalier>

          {!this.isPortrait && <Visage />}
        </div>

        <div class="inner-content bottom">
          {this.renderHighlights({ vocalize: false })}

          {!this.isMediumScreen && <Navigation id={NAVIGATION_ID} />}
        </div>

        {this.isPortrait && (
          <div class="mobile-avatar">
            <Visage />
          </div>
        )}
      </StyledPitchSlate>
    )
  },
})

export default PitchSlate
