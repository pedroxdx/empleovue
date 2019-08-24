<template>
    <section class="page-header text-center">
        <div class="container">
            &nbsp;
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                    <h2>{{ title }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "PageHeader",
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>