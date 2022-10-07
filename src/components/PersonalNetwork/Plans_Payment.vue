<template>
  <div class="item text-black m-4">
    <p class="m-0">Manage your plan</p>
    <h3>Pro Workspace</h3>
    <a href="">&lt; Return to Plans & Payment</a>

    <div class="grid-container">

      <div class="card mt-5 shadow" style="width: 18rem;">
        <div class="card-body ">
          <h5 class="card-title">Free</h5>
          <p class="card-text">For individual creators</p>
          <h2>$0</h2>
          <p>per month</p>
          <h6>What's include:</h6>
          <ul class="mb-5">
            <li>1 Workspace</li>
            <li>1 members</li>
            <li>10GB of active storage</li>
            <li> Unlimited file requests & share links</li>
            <li>Collaborative review sessions</li>
          </ul>
          <a href="#" class="btn btn-outline-secondary ms-5">Downgrade to Free</a>
        </div>
      </div>

      <div class="card mt-5 shadow" style="width: 18rem;">
        <div class="card-body ">
          <h5 class="card-title">Free</h5>
          <p class="card-text">For individual creators</p>
          <h2>$15</h2>
          <p>per month</p>
          <h6>All the perks of Free, and:</h6>
          <ul class="mb-3">
            <li>1 Workspace</li>
            <li>1 members</li>
            <li>250GB of active storage</li>
            <li>500GB of archive storage</li>
            <li> Advanced transfer</li>
          </ul>
          <div class="ms-5 pd-5">
            <img src="../../../public/right.png" alt="" style="width: 1em; height: 1em;">
            <a href="" class="ms-3 " >  Current Plan</a> <br>
          </div>
          
          <a href="#" class="btn btn-primary ps-5 pe-5 ms-5 mt-4">Customize</a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 10rem;
}
@media (max-width: 750px) {
  .grid-container {
  display: flex;
  flex-direction: column;
}
}
a{
  text-decoration:solid;
}
</style>
  
  