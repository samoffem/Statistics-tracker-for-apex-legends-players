<template>
    <section class="search">
        <h1> Track player Statistics </h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platforn" id="platform" v-model="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="Origin">Origin</option>
                </select>
            </div>

            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" 
                name="text"
                v-model="gamertag"
                id="gamertag"
                placeholder="OriginID, Xbox Live gamertag, PSN ID, etc"
                >
            </div>
            <div class="form-group">
                <input type="submit" value="Submit" class="btn">
            </div>
        </form>
    </section>
    
</template>

<script>
export default {
    data(){
        return{
            platform: "psn",
            gamertag: ""
        }
    },
    beforeCreate(){
        document.body.className = "body-bg-image"
    },
    methods: {
        onSubmit(){
            if(!this.gamertag){
                console.log("Please enter a gamer tag")
            } else{
                this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
            }
        }
    }
    
}
</script>

<style >

</style>