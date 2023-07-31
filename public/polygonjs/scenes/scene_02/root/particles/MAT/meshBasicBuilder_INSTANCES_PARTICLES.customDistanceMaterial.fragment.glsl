
// INSERT DEFINES

#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

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
varying vec2 particlesSimUvVarying;




#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>



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
	float v_POLY_multAdd2_val = (0.39*(v_POLY_globals1_time + 2.22)) + v_POLY_negate1_val;
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/hsvToRgb1
	vec3 v_POLY_hsvToRgb1_rgb = hsv2rgb(v_POLY_floatToVec3_1_vec3);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/smoothstep1
	float v_POLY_smoothstep1_val = smoothstep(0.0, 1.0, v_POLY_multAdd2_val);
	
	// /particles/MAT/meshBasicBuilder_INSTANCES_PARTICLES/output1
	diffuseColor.xyz = v_POLY_hsvToRgb1_rgb;
	diffuseColor.a = v_POLY_smoothstep1_val;




	// INSERT BODY

	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
