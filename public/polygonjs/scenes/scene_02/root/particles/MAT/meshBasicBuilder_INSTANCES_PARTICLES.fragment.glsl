uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>



// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/hsvToRgb1
// https://github.com/hughsk/glsl-hsv2rgb
// https://stackoverflow.com/questions/15095909/from-rgb-to-hsv-in-opengl-glsl
vec3 hsv2rgb(vec3 c) {
	vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
	return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}







// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/globals1
uniform float time;

// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/attribute4
varying float v_POLY_attribute_idn;

// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/instanceTransform1
varying vec2 particles_sim_uv_varying;




#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );



	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/globals1
	float v_POLY_globals1_time = time;
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/attribute4
	float v_POLY_attribute4_val = v_POLY_attribute_idn;
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/attribute1
	float v_POLY_attribute1_val = v_POLY_attribute_idn;
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/floatToVec2_3
	vec2 v_POLY_floatToVec2_3_vec2 = vec2(v_POLY_attribute4_val, 0.0);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/multAdd1
	float v_POLY_multAdd1_val = (1000.0*(v_POLY_attribute1_val + 0.0)) + 0.0;
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/random3
	float v_POLY_random3_rand = rand(v_POLY_floatToVec2_3_vec2);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/round1
	float v_POLY_round1_val = sign(v_POLY_multAdd1_val)*floor(abs(v_POLY_multAdd1_val)+0.5);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/multScalar1
	float v_POLY_multScalar1_val = (0.51*v_POLY_random3_rand);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/floatToVec2_1
	vec2 v_POLY_floatToVec2_1_vec2 = vec2(v_POLY_round1_val, 0.2);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/add1
	float v_POLY_add1_sum = (v_POLY_attribute4_val + v_POLY_multScalar1_val + 0.0);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/random1
	float v_POLY_random1_rand = rand(v_POLY_floatToVec2_1_vec2);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/negate1
	float v_POLY_negate1_val = -1.0 * v_POLY_add1_sum;
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/floatToVec3_1
	vec3 v_POLY_floatToVec3_1_vec3 = vec3(v_POLY_random1_rand, 1.0, 0.76);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/multAdd2
	float v_POLY_multAdd2_val = (0.34*(v_POLY_globals1_time + 1.5)) + v_POLY_negate1_val;
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/hsvToRgb1
	vec3 v_POLY_hsvToRgb1_rgb = hsv2rgb(v_POLY_floatToVec3_1_vec3);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/smoothstep1
	float v_POLY_smoothstep1_val = smoothstep(0.0, 1.0, v_POLY_multAdd2_val);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/output1
	diffuseColor.xyz = v_POLY_hsvToRgb1_rgb;
	diffuseColor.a = v_POLY_smoothstep1_val;



	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}