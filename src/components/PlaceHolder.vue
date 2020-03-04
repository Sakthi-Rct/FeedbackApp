<template>
    <div class="place-holder-parent">
        <div class="placeholder-wrap">
            <img src="../assets/neutral-face-icon.svg" alt="smiley" />
            <h1>No teammate selected</h1>
            <p>To provide a feedback you should select an employee from the teammates 
                list or to search by a name using the search field</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PlaceHolder",
    data: function() {
        return {
            
        }
    }
}
</script>

<style scoped lang="scss">
.place-holder-parent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .placeholder-wrap {
        width: 31%;
        text-align: left;

        img {
            width: 72px;
        }

        h1 {
            color: #4E5357;
            font-size: 48px;
            line-height: 57px;
            margin: 30px 0 20px;
            font-weight: 100;
        }

        p {
            font-size: 14px;
            color: #7A7E81;
            line-height: 20px;
        }
    }
}
</style>