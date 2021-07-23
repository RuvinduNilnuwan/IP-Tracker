<template>

<div class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row bg-white gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md">

    <!-- flex 1-->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">Ip adress</h3>
        <span class="text-2xt">{{IpInfo.address}}</span>
    </div>
    <!-- flex 2-->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">Location</h3>
        <span class="text-2xt">{{IpInfo.state}}</span>
    </div>
    <!-- flex 3-->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">TimeZone</h3>
        <span class="text-2xt">UTC {{IpInfo.timezone}}</span>
    </div>
    <!-- flex 4-->
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">ISP</h3>
        <span class="text-2xt">{{IpInfo.isp}}</span>
    </div>
    <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">City</h3>
        <span class="text-2xt">{{IpInfo.pst}}</span>
    </div>
     </div>

</template>

<script>
export default {
    props: ["IpInfo"],
};
</script>