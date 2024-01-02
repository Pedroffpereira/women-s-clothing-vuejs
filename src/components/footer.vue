<template>
    <footer>
        <div class="container">
            <div class="py-5">
                <div class="row">
                    <div class="col-md-4">
                        <h5>Botique</h5>
                        <h5>The best look anytime, anywhere.</h5>
                    </div>
                    <div class="col-md-2">
                        <h5>Useful information</h5>
                        <ul>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/list">List</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contact">Contact</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" to="/cart">Cart</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6"></div>
                </div>
            </div>
            <div class="py-5">
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            Copyright © 2023 Brandstore. Powered by Brandstore.
                        </div>

                    </div>

                    <div class="col-md-6">
                        <div class="text-right">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style>
    ul{
        list-style-type: none;

    }
</style>