<template>
    <div class="skill-wrap">
        <p class="skill-title">{{ skillText }}</p>
        <div class="star-wrap">
            <p>( {{ this.checkedCategories }} )</p>
            <div class="rating">
                <input type="radio" :checked=checkedCategories :id="skillRow + '5'" :name="skillRow + 'rating'" 
                    value="5" class="check-box" v-model="checkedCategories" />
                <label :for="skillRow + '5'"></label>
                <input type="radio" :checked=checkedCategories :id="skillRow + '4'" :name="skillRow + 'rating'" 
                    value="4" class="check-box" v-model="checkedCategories" />
                <label :for="skillRow + '4'"></label>
                <input type="radio" :checked=checkedCategories :id="skillRow + '3'" :name="skillRow + 'rating'" 
                    value="3" class="check-box" v-model="checkedCategories" />
                <label :for="skillRow + '3'"></label>
                <input type="radio" :checked=checkedCategories :id="skillRow + '2'" :name="skillRow + 'rating'" 
                    value="2" class="check-box" v-model="checkedCategories" />
                <label :for="skillRow + '2'"></label>
                <input type="radio" :checked=checkedCategories :id="skillRow + '1'" :name="skillRow + 'rating'" 
                    value="1" class="check-box" v-model="checkedCategories" />
                <label :for="skillRow + '1'"></label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PersonalSkill",
    props: {
        skillText: {
            type: String
        },
        skillRow: {
            type: String
        }
    },
    data: function() {
        return {
            checkedCategories: 0
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.skill-wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .skill-title {
        width: 75%;
        text-align: left;
        font-size: 14px;
        color: #7A7E81;
    }

    .star-wrap {
        display: flex;
        align-items: center;
        width: 25%;
        justify-content: space-between;

        p {
            font-size: 12px;
            color: #7A7E81;
            width: 15%;
        }

        $star-size: 22px;
        $star-spacing: 10px;
        $star-on-color: #EC1940;
        $star-off-color: #E8E9EA;
        .rating {
            width: 75%;

            label {
                float: right;
                width: $star-size;
                height: $star-size;
                cursor: pointer;
                
                &:not(:first-of-type) {
                    padding-right: $star-spacing;
                }
                
                &:before {
                    content: "\2605";
                    font-size: $star-size;
                    color: $star-off-color;
                    line-height: 1;
                }
            }
            input {
                display: none;
            }
            input:checked ~ label:before,
            &:not(:checked) > label:hover:before,
            &:not(:checked) > label:hover ~ label:before {
                color: $star-on-color;
            }
        }
    }
}
</style>