<template>
    <div>
        <div class="profile p-3">
            <img src="../../public/profile0.jpeg" alt="" style="width: 3.5em; height: 3.5em;">
            <div>
                <p class="align-bottom userName mb-0 text-black">prashant Rathore</p>
                <p class="mt-0 pt-0 text-black-50" >prashantsinghrathore29@gmail.com</p>
            </div>
        </div>
    </div>

</template>

<style scoped>

.profile {
  display: grid;
  grid-template-columns: 60px 1fr;
}
.profile>img {
  border-radius: 50px;
  margin-top: 10px;
  width: 80px;
  height: 80px;
}
</style>