<template>
  <StyledBasicContact class="basic-contact">
    <span class="say-hello">Say Hello</span>

    <ul>
      <NavItem href="mailto:jiahao9139@gmail.com">jiahao9139@gmail.com</NavItem>
      <NavItem
        external
        href="https://wa.me/01133094116"
        ariaLabel="t dot me forward slash mrolaolu"
        >Whatsapp Us!</NavItem
      >
    </ul>
  </StyledBasicContact>
</template>

<script>
import NavItem from '../NavItem'
import styled from 'vue-styled-components'

const StyledBasicContact = styled.div`
  font-size: 1em;
  line-height: 2.5;
  position: relative;

  ul {
    font-size: 1.15em;
  }

  a {
    color: currentColor;
  }
`

export default {
  components: { StyledBasicContact, NavItem },
}

StyledBasicContact.name = 'StyledBasicContact'
</script>
