<template>
  <div class="item">
    <i>
      <slot name="icon" />
    </i>
    <div class="details">
      <h3>
        <slot name="heading" />
      </h3>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;

  i {
    width: 32px;
    height: 32px;

    display: flex;
    place-items: center;
    place-content: center;
  }

  @include breakpoint.media(lg) {
    position: relative;

    i {
      width: 50px;
      height: 50px;

      position: absolute;
      top: calc(50% - 25px);
      left: 0;
    }
  }
}

.item {
  + .item {
    margin-top: 2rem;
  }

  @include breakpoint.media(lg) {
    padding-left: 60px;
  }

  i {
    color: var(--color-text);

    @include breakpoint.media(lg) {
      background: var(--color-background);
      border: 1px solid var(--color-border);
      border-radius: 8px;
    }
  }
}

.details {
  flex: 1 1 0;
  margin-left: 1rem;

  h3 {
    margin-bottom: 0.4rem;

    font-size: 1.2rem;

    color: var(--color-heading);
  }
}
</style>
