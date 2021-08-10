<template>
    <section>

        <b-carousel
            :progress="progress"
            :progress-type="progressType">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.title}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </section>
</template>

<script>
export default {
    data() {
        return {
            progress: true,
            progressType: 'is-primary',
            carousels: [
                { title: 'Slide 1', color: 'black' },
                { title: 'Slide 2', color: 'dark' },
                { title: 'Slide 3', color: 'primary' },
                { title: 'Slide 4', color: 'info' }
            ]
        }
    }
}
</script>