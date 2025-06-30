import {
  SquareofDots,
  CornerstonePatternsLeft,
  CornerstonePatternsRight,
} from '@/assets'
import Vue from 'vue'
import StyledCornerstone from './styles'

const Cornerstone = Vue.component('Cornerstone', {
  props: ['name'],
  render() {
    return (
      <StyledCornerstone name={this.name}>
        <div class="inner-content">
          <Cavalier heading="Design">
            <p slot="text">
              We blend creativity with strategy to design responsive,
              user-focused websites that leave a lasting impression. Our design
              approach ensures every interface is intuitive, accessible, and
              aligned with your brand’s identity.
            </p>

            <SquareofDots
              data-shape
              slot="inContent"
              aria-hidden="true"
              class="square-of-dots"
            />

            <CornerstonePatternsRight
              data-shape
              aria-hidden="true"
              id="cs-pattern-right"
            />
          </Cavalier>

          <Cavalier heading="Engineering">
            <p slot="text">
              Our developers build fast, secure, and scalable web applications
              tailored to your business needs. From front-end interactivity to
              back-end functionality, we use modern frameworks and best
              practices to deliver robust digital experiences.
            </p>

            <CornerstonePatternsLeft
              data-shape
              aria-hidden="true"
              id="cs-pattern-left"
            />
          </Cavalier>
        </div>
      </StyledCornerstone>
    )
  },
})

export default Cornerstone
